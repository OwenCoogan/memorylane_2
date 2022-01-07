import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://161.35.244.159:6950/v1/auth/';

class UserService {
  getUserBoard() {
    return axios.get(API_URL + 'me', { headers: authHeader() });
  }
}

export default new UserService();
