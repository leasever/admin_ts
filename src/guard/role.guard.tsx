import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes, Roles } from '@models/index'
import { AppStore } from '@redux/store'

export interface Props {
  rol: Roles
}

const RoleGuard = ({ rol }: Props) => {
  const { role } = useSelector((store: AppStore) => store.user)
  const found = role.find((r) => r === rol)

  return found === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.PRIVATE} />
  )
}

export default RoleGuard
