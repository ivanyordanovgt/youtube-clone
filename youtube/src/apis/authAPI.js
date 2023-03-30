import { axiosClient } from "./axiosClient"

export const authAPI = {

    register(data) {
        if (data.email && data.password) {
            axiosClient.post('register', data)
        } else alert('no no')
    },

    login(data) {
        if (data.email && data.password) {
            return axiosClient.post('login', data)
        } else alert('no no')
    },

    isLoggedIn() {
        const response = axiosClient.get('user')
        return response
    }
}