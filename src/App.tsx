import '@/App.css'
import {AuthGuard, RoleGuard} from '@/guard'
import {AxiosInterceptor} from '@/interceptors'
import {PrivateRoutes, PublicRoutes, Roles} from '@/models'
import {Dashboard} from '@/pages/Private'
import store from '@/redux/store'
import ThemeProvider from '@/theme'
import {RoutesWithNotFound, SnackbarUtilitiesConfigurator} from '@/utilities'
import {SnackbarProvider} from 'notistack'
import {Suspense, lazy} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Navigate, Route} from 'react-router-dom'

const Login = lazy(() => import('@/pages/Login/Login'))
const Private = lazy(() => import('@/pages/Private/Private'))

function App() {
  AxiosInterceptor()
  return (
    <ThemeProvider>
      <Suspense fallback={<>Loading suspense...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <SnackbarProvider>
              <SnackbarUtilitiesConfigurator />
              <RoutesWithNotFound>
                <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route element={<AuthGuard privateValidation={true} />}>
                  <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                </Route>
                <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                  <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                </Route>
              </RoutesWithNotFound>
            </SnackbarProvider>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
