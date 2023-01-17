import { useState } from 'react'
import { useAsync, useFetchAndLoad } from '@hooks/index'
import { UserInfo } from '@models/index'
import { getUsers } from '@services/index'
import { ErrorBoundary } from '@utilities/index'

function ComponentTest() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState<boolean>(false)
  const { loading, callEndpoint } = useFetchAndLoad()

  const getApiData = async () => await callEndpoint(getUsers())

  const adaptUsers = (data: any | boolean) => {
    data ? setUsers(data) : setError(true)
  }

  useAsync(getApiData, adaptUsers, () => {}, [])
  
  return (
    <ErrorBoundary
      fallBackComponent={<>don't walk ComponentTest 1</>}
      error={error}
      resetCondition={users}
    >
      <div>
        {loading ? (
          <h1>Users loading...</h1>
        ) : (
          <div>
            <h2>Component test 1</h2>
            <ul>
              {users.map((user: UserInfo) => (
                <li key={user._id}>
                  <span>{user._id}</span>
                  <strong>{JSON.stringify(user)}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ErrorBoundary>
  )
}

export default ComponentTest
