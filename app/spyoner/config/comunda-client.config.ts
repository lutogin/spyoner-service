import { COMUNDA_PASSWORD, COMUNDA_URL, COMUNDA_USER } from './app.config';

export const comundaClientConfig = {
  baseURL: `${COMUNDA_URL}/engine-rest`,
  headers: {
    'Content-type': 'application/json',
  },
  auth: {
    username: COMUNDA_USER,
    password: COMUNDA_PASSWORD,
  },
};
