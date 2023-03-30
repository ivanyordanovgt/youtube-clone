import axios from "axios";
export const axiosClient = {
  
    url: 'http://127.0.0.1:8000/api/',
  
    post(apiUrl, data) {
        console.log(data)
        const response = axios({
            method: 'post',
            url: this.url + apiUrl,
            data: data,
            withCredentials: true,
          });

          return response
        },
    
    put(apiUrl, data) {
    },
  
    get(apiUrl) {
      const response = axios({
        method: 'get',
        url: this.url + apiUrl
      })
      return response
    },
  
    getUser() {
    },
  
    isLoggedIn() {
  
    //   return this.http.get('http://127.0.0.1:8000/api/user', {withCredentials: true})
  
    },
  
    login(data) {
    //   return this.http.post('http://127.0.0.1:8000/api/login', data)
    }
  };