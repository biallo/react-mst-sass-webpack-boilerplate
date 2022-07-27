import { types } from 'mobx-state-tree';

export const AuthInfoType = types
  .model('AuthInfoType', {
    token: types.maybeNull(types.string),
    id: types.maybeNull(types.integer),
    email: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
    scope: types.maybe(types.integer),
    createdTime: types.maybeNull(types.string)
  });
