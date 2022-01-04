import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:6950/v1/auth/';

class UserService {
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new UserService();
