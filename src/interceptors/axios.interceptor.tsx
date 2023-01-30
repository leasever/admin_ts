import {getToken, getValidationError, SnackbarUtilities} from '@/utilities'
import axios, {AxiosRequestConfig} from 'axios'

export const AxiosInterceptor = () => {
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

  const updateHeader = (request: AxiosRequestConfig) => {
    let {token} = getToken('user')
    const newHeader = {
      Authorization:  `Bearer ${token}`,
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
      if (!error.response) getValidationError(error.code)
      !error.response.data.message
        ? getValidationError(error.code)
        : SnackbarUtilities.error(error.response.data.message)
      return Promise.reject(error.code)
    }
  )
}
