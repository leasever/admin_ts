import {useState} from 'react'
import {useAsync, useFetchAndLoad} from '@/hooks'
import {UserInfo} from '@/models'
import {getUsers} from '@/services'
import {ErrorBoundary} from '@/utilities'

function ComponentTest() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState<boolean>(false)
  const {loading, callEndpoint} = useFetchAndLoad()

  const getApiData = async () => await callEndpoint(getUsers())

  const adaptUsers = (data: any | boolean) => {
    data ? setUsers(data) : setError(true)
  }

  useAsync(getApiData, adaptUsers, () => {}, [])

  return (
    <ErrorBoundary fallBackComponent={<>don't walk ComponentTest 1</>} error={error} resetCondition={users}>
      <div>
        {loading ? (
          <strong>Users loading...</strong>
        ) : (
          <div>
            <h1>Component test 1</h1>
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
