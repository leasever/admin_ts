import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes, Roles } from '../../models'
import { createUser, resetUser, UserKey } from '../../redux/states/user'
import { getAbraham } from '../../services'
import { clearLocalStorage } from '../../utilities'
export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }, [])

  const login = async () => {
    try {
      const result = await getAbraham()
      dispatch(createUser({ ...result, rol: Roles.USER }))
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
    } catch (error) {}
  }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>LOGIN</button>
    </div>
  )
}

export default Login
