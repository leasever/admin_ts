import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes, Roles } from '../models'
import { AppStore } from '../redux/store'

export interface Props {
  rol: Roles
}

const RoleGuard = ({ rol }: Props) => {
  const userState = useSelector((store: AppStore) => store.user)
  return userState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.PRIVATE} />
  )
}

export default RoleGuard
