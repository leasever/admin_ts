import {loadAbort} from '@/utilities'
import axios from 'axios'

const authUrl = 'auth'

export const login = (email: string, password: string) => {
  const controller = loadAbort()
  return {
    call: axios.post(authUrl + '/login', {email, password}, {signal: controller.signal}),
    controller,
  }
}

export const getUsers = () => {
  const controller = loadAbort()
  return {
    call: axios.get(authUrl, {signal: controller.signal}),
    controller,
  }
}

export const getUsers2 = () => {
  const controller = loadAbort()
  return {
    call: axios.get(authUrl + 'xxxxxxxxxxxxx', {signal: controller.signal}),
    controller,
  }
}
