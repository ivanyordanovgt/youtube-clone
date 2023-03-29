

export class authAPI {
  
    url = 'http://127.0.0.1:8000/api/'
  
    post(apiUrl, data) {
        const result = axios({
            method: 'post',
            url: this.url + apiUrl,
            data: data
          });
    }
    
    put(apiUrl, data) {
    }
  
    get(apiUrl) {
    }
  
    getUser() {
    }
  
    isLoggedIn() {
  
    //   return this.http.get('http://127.0.0.1:8000/api/user', {withCredentials: true})
  
    };
  
    login(data) {
    //   return this.http.post('http://127.0.0.1:8000/api/login', data)
    }
  };