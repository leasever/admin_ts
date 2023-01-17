import { SnackbarProvider } from 'notistack'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './App.css'
import { Logout } from './components/Logout'
import { AuthGuard, RoleGuard } from './guard'
import { AxiosInterceptor } from './interceptors'
import { PrivateRoutes, PublicRoutes, Roles } from './models'
import { Dashboard } from './pages/Private'
import store from '@redux/store'
import { RoutesWithNotFound, SnackbarUtilitiesConfigurator } from './utilities'

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {
  AxiosInterceptor()
  return (
    <div className='App'>
      <Suspense fallback={<>Loading suspense...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <SnackbarProvider>
              <SnackbarUtilitiesConfigurator />
              <Logout />
              <RoutesWithNotFound>
                <Route
                  path='/'
                  element={<Navigate to={PrivateRoutes.PRIVATE} />}
                />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route element={<AuthGuard privateValidation={true} />}>
                  <Route
                    path={`${PrivateRoutes.PRIVATE}/*`}
                    element={<Private />}
                  />
                </Route>
                <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                  <Route
                    path={PrivateRoutes.DASHBOARD}
                    element={<Dashboard />}
                  />
                </Route>
              </RoutesWithNotFound>
            </SnackbarProvider>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
