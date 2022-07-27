import { axiosAuth, axiosOpen } from '../utils/axios';

const API = process.env.API;

export default {
  getActivities: (params) =>
    axiosAuth.get(API + '/user/activities', {params})
};
