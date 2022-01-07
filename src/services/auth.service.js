import axios from 'axios'
const API_URL = 'https://167.99.215.131:6950/v1/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log(response)
        if (response.data.data.accessToken) {
          localStorage.setItem('MemoryLaneCookie', JSON.stringify(response.data.data.accessToken));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('MemoryLaneCookie');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
