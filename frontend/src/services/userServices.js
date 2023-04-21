import http from './http'

export const getAllUsers = () => {
  return http.get('/user/all')
}

export const getAllPatients = () => {
  return http.get('/user/type/Patient')
}







