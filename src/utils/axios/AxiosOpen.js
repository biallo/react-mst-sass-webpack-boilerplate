import axios from 'axios';
import {
  getResult,
  getErrorObject
} from './AxiosConfig';

export const axiosOpen = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 20000
});

axiosOpen.interceptors.request.use(
  requestConfig => {
    requestConfig.headers = {
      ...requestConfig.headers
    };
    return requestConfig;
  },
  error => Promise.reject(error),
);

axiosOpen.interceptors.response.use(
  response => {
    return getResult(response);
  },
  error => {
    const errorObj = getErrorObject(error.response);
    return Promise.reject(errorObj);
  },
);
