import {lazy} from 'react'
import {Navigate, Route} from 'react-router-dom'
import {PrivateRoutes} from '@/models'
import {RoutesWithNotFound} from '@/utilities'
import {DashboardLayout} from '@/layouts/dashboard'

const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const Home = lazy(() => import('./Home/Home'))

export interface PrivateInterface {}

const Private: React.FC<PrivateInterface> = () => {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<DashboardLayout />}>
        <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </Route>
    </RoutesWithNotFound>
  )
}

export default Private
