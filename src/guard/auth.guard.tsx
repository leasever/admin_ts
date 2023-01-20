import {PrivateRoutes, PublicRoutes} from '@/models'
import {AppStore} from '@/redux/store'
import {useSelector} from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'

interface props {
  privateValidation: boolean
}
const PublicValidationFragment = <Outlet />
const PrivateValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

const AuthGuard = ({privateValidation}: props) => {
  const {token} = useSelector((store: AppStore) => store.user)

  return token ? privateValidation ? PublicValidationFragment : PrivateValidationFragment : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard
