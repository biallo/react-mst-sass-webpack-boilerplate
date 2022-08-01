import {
  types,
  flow
} from 'mobx-state-tree';
import Keys from '../../config/Keys';
import { resetAxiosAuth } from '../../utils/axios';
import authService from '../../services/AuthService';
import { AuthInfoType } from './AuthTypes';

export const Auth = types
  .model('Auth', {
    userInfo: types.optional(AuthInfoType, {}),
  })
  .views(self => ({
    get isAuthorized() {
      return !!self.userInfo.token;
    },
  }))
  .actions(self => ({
    async updateAccount(data) {
      self.userInfo = data;
      resetAxiosAuth();
    },
    checkNeedLogin(redirectTo) {
      if (!self.isAuthorized) {
        window.location.href='/';
      }
      return !self.isAuthorized;
    },
    unauthorized(jumpToLogin) {
      self.removeAccount();

      if (jumpToLogin) {
        window.location.href='/';
      }
    },
    async removeAccount() {
      self.userInfo = {};
      window.localStorage.removeItem(`REACT_MST_SASS_WEBPACK_BOILERPLATE_${Keys.storeVersion}`);
      resetAxiosAuth();
    },
  }))
  .actions(self => ({
    async login(params) {
      // return await authService.login(params);

      // fake data
      return {
        code: 0,
        data: {
          token: 'xxxxxxx',
          id: 111,
          email: 'xxx@xxx.xxx',
          name: 'xxx',
          scope: 1,
          createdTime: '2022-01-01T11:11:11.000Z'
        }
      };
    },

    logout(navigate) {
      // return await authService.logout();

      // fake data
      return true;
    }
  }));
