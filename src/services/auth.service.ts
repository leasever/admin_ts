const baseUrl = 'http://localhost:3001/api/v1/'

const characterUrl = baseUrl + 'auth/'

export const getAbraham = () => {
  return fetch(characterUrl + 'abraham').then((res) => res.json())
}
