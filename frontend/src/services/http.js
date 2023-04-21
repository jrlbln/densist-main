import axios from "axios"
const http = axios.create({
  baseURL: 'http://localhost:8082/api',
})

http.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectedError) {
    console.error(error)
    console.error("error")
    alert('An unexpected error occurred')
  }
  return Promise.reject(error)
})

export default http