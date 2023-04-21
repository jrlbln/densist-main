import http from './http'

export const loginUser = (data) => {
    return http.post('/user/login', data)
  }

export const getUserInfo = () => {
    if (localStorage.getItem("currentUser")) {
      return JSON.parse(localStorage.getItem('currentUser')).object
    }
    return false
  }

  export function getAccessToken() {
    return localStorage.getItem('currentUser')
  }
  
  export function logout() {
    localStorage.removeItem('currentUser')
  }

  export const getFullname = () => {
    if (localStorage.getItem("currentUser")) {
      const obj=JSON.parse(localStorage.getItem('currentUser')).object
      return obj.firstName +" "+obj.middleName+" "+obj.lastName
    }
    return false
  }

