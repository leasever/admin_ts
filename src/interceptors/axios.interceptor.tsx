import axios, { AxiosRequestConfig } from 'axios'
import { PublicRoutes } from '../models'
import { getToken, getValidationError, SnackbarUtilities } from '../utilities'

export const AxiosInterceptor = () => {
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

  const updateHeader = (request: AxiosRequestConfig) => {
    let { token } = getToken('user')
    const newHeader = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
    request.headers = newHeader
    return request
  }

  axios.interceptors.request.use((request) => {
    if (request.url?.includes('assets')) return request
    return updateHeader(request)
  })

  axios.interceptors.response.use(
    (response) => {
      SnackbarUtilities.success(response.statusText)
      return response
    },
    (error) => {
      const redirec = () => {
        window.location.href = `/${PublicRoutes.LOGIN}`
      }
      if (error.response.status === 401) redirec()
      error.response.data.message
        ? SnackbarUtilities.error(error.response.data.message)
        : SnackbarUtilities.error(getValidationError(error.code))
      return Promise.reject(error.code)
    }
  )
}
