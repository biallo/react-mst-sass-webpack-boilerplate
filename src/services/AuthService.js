import { axiosAuth, axiosOpen } from '../utils/axios';

const API = process.env.API;

export default {
  login: (params) =>
    axiosOpen.post(API + '/auth/login', params),
  logout: () =>
    axiosAuth.get(API + '/auth/logout')
};
