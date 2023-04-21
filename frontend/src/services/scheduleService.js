import http from './http'

    export const getSchedule = (id) => {
        return http.get(`/schedule/user/${id}`)
    }


    export const getTimeslot = (id) => {
        return http.get(`/schedule/timeslot/${id}`)
    }

    export const setNullSchedule = (id) => {
        return http.post(`/schedule/add/user/${id}`,{})
    }


    export const updateTimeslot = (data, id) => {
        return http.patch(`/schedule/edit/timeslots/${id}`, data)
    }