import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/v1/'

const characterUrl = baseUrl + 'auth/'

export const getAbraham = () => {
  return axios.get(characterUrl + 'abraham')
}
