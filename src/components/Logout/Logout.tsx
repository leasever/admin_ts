import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '@models/index'
import { resetUser, UserKey } from '@redux/states/user'
import { clearLocalStorage } from '@utilities/index'
export interface LogoutInterface {}

const Logout: React.FC<LogoutInterface> = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = () => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(PublicRoutes.LOGIN, { replace: true })
  }
  return <button onClick={logOut}>Log out</button>
}

export default Logout
