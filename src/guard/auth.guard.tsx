import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../models'
import { AppStore } from '../redux/store'

interface props {
  privateValidation: boolean
}
const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

const AuthGuard = ({ privateValidation }: props) => {
  const userState = useSelector((store: AppStore) => store.user)

  return userState._id ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  )
}

export default AuthGuard
