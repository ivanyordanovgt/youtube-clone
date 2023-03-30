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

    async isLoggedIn() {
        try { 
            const res = await axiosClient.get('user');
            console.log(res.data.data)
            if (res.data.data.id) {
                return true;
            }
        } catch(err) {
            return false
        }
    },

    async getUser(id) {
        
    }
}