import http from './http'


  export const getAllTransactions = () => {
    return http.get(`/transactions/all`)
  }
  export const getTransactionsByID = (id) => {
    return http.get(`/transactions/getTransaction/${id}`)
  }

  export const getTransactionsByUser = (id) => {
    return http.get(`/transactions/getpatients/${id}`)
  }


  export const getRequestedRecords = () => {
    return http.get(`/transactions/requestedrecords`)
  }

  export const getRequestRecordApproved = (id) => {
    return http.get(`/transactions/requestrecordapproved/${id}`)
  }

  export const editTransaction = (data)=>{
    return http.patch(`/transactions/patient/edit/${data.id}`, data)
  }

  export const rejectRequestedRecords = (id)=>{
    return http.patch(`/transactions/reject/requestedrecord/${id}`)
  }

  export const requestRecord = (id)=>{
    return http.patch(`/transactions/patient/request/${id}`)
  }

  export const approveRequestRecord = (id)=>{
    return http.patch(`/transactions/patient/approverequest/${id}`)
  }


  export const addTransaction = (data,id)=>{
    return http.post(`/transactions/patient/add/${id}`, data)
  }



  