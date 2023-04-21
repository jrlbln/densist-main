import http from './http'

    export const getAllAppointent = () => {
        return http.get('/appointment/all')
    }

    export const getAllAppointentbyUser = (id) => {
        return http.get(`/appointment/user/${id}`)
    }

    export const addAppointment = (id, data) => {
        return http.post(`appointment/add/patient/${id}`, data)
    }

    export const approveAppointment = (id) => {
        return http.patch(`/appointment/approve/patient/${id}`)
    }

    export const declineAppointment = (id) => {
        return http.patch(`/appointment/decline/patient/${id}`)
    }
