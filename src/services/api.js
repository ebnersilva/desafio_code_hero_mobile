import axios from 'axios';
import env from '~/config/env';

const api = axios.create({
  baseURL: env.SERVER_URL,
});

export default api;
