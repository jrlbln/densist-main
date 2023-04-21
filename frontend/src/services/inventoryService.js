import http from './http'

  export const getAllInventory = () => {
      return http.get(`/inventory/all`)
    }
  export const addItem = (data) => {
      return http.post(`/inventory/add`,data)
    }

  export const editInventory = (data) => {
      return http.patch(`/inventory/edit/${data.id}`, data)
    }

  export const activateItem = (id) => {
      return http.patch(`/inventory/activate/${id}`)
    }



  
  