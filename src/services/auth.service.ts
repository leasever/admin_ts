import axios from 'axios'
import { loadAbort } from '../utilities'

const authUrl = 'auth'

const data = { email: 'leandrovegaabraham@gmail.com', password: '12345678' }

export const login = () => {
  const controller = loadAbort()
  return {
    call: axios.post(authUrl + '/login', data, { signal: controller.signal }),
    controller,
  }
}

export const getUsers = () => {
  const controller = loadAbort()
  return {
    call: axios.get(authUrl, { signal: controller.signal }),
    controller,
  }
}

export const getUsers2 = () => {
  const controller = loadAbort()
  return {
    call: axios.get(authUrl + 'xxxxxxxxxxxxx', { signal: controller.signal }),
    controller,
  }
}
