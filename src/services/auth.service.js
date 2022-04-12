import axios from 'axios'
const API_URL = 'http://localhost:6950/auth';

class AuthService {
  constructor() {
    this.router = this.$router;
  }
  login(user) {
    return axios
      .post(API_URL + '/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log(response)
        if (response.data) {
          localStorage.setItem('MemoryLaneCookie', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('MemoryLaneCookie');
  }

  register(user) {
    return axios.post(API_URL + '/register', {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response)
      if (response.data) {
        localStorage.setItem('MemoryLaneCookie', JSON.stringify(response.data));
      }
      return response.data;
    });

  }
}

export default new AuthService();
