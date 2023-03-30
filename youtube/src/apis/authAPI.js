import { axiosClient } from "./axiosClient"

export const authAPI = {

    register(data) {

        try{return axiosClient.post('register', data)} catch(err) {return false}
    },

    login(data) {
        try {return axiosClient.post('login', data)} catch(err) {return false}
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
        
    },

    async logout() {
        axiosClient.post('logout')
    }
}