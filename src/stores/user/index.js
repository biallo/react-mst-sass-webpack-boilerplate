import {
  types,
  flow
} from 'mobx-state-tree';
import userService from '../../services/UserService';
import { ActivitiesType } from './UserTypes';

export const User = types
  .model('User', {
    activities: types.optional(types.array(ActivitiesType), [])
  })
  .actions(self => ({
    async getActivities(params) {
      // const res = await userService.getActivities(params);

      // fake data
      const res = {
        code: 0,
        data: {
          list: [{
            actionType: 1,
            location: 'Arcadia/Mars',
            ip: '0.0.0.0',
            createdTime: '2022-01-01T11:11:11.000Z'
          }, {
            actionType: 2,
            location: 'Casius/Mars',
            ip: '0.0.0.0',
            createdTime: '2022-02-02T22:22:22.000Z'
          }]
        }
      };

      return self.getActivitiesSuccess(res);
    },

    getActivitiesSuccess(res) {
      if (res) {
        self.activities = res.data.list;
      } else {
        self.activities = [];
      }
    }
  }));
