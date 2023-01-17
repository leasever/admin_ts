export const persistLocalStorage = <T,>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }))
}
export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}

export const getToken = (key: string) => {
  let foundToken = localStorage.getItem(key)
  if (foundToken) return JSON.parse(foundToken as string)
  return 'Not a token'
}
