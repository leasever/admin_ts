import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFetchAndLoad } from '../../hooks'
import { PrivateRoutes, PublicRoutes } from '../../models'
import { createUser, resetUser, UserKey } from '../../redux/states/user'
import { login } from '../../services'
import { clearLocalStorage } from '../../utilities'

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const { loading, callEndpoint } = useFetchAndLoad()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }, [])

  const handleClick = async () => {
    const { data } = await callEndpoint(login())
    dispatch(createUser({ ...data }))
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
  }

  return (
    <>
      {loading ? (
        <div>
          <h3>LOADING</h3>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <button onClick={handleClick}>LOGIN</button>
        </div>
      )}
    </>
  )
}

export default Login
