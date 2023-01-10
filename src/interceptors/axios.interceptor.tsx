import axios, { AxiosRequestConfig } from 'axios'
import { getValidationError, SnackbarUtilities } from '../utilities'

export const AxiosInterceptor = () => {
  const updateHeader = (request: AxiosRequestConfig) => {
    const token =      'eyJfaWQiOiI2M2I5OWZmNjQ3ZDRmZDM4YzQ1YjA2YjMiLCJyb2xlIjpbImFkbWluIiwidXNlciJdLCJpYXQiOjE2NzMzMzA5MTgsImV4cCI6MTY3MzMzODExOH0'
    const newHeader = {
      Autorization: token,
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
      SnackbarUtilities.error(getValidationError(error.code))
      return Promise.reject(error.code)
    }
  )
}
