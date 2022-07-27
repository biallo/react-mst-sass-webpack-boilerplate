import {
  types,
  onSnapshot,
  flow
} from 'mobx-state-tree';
import Keys from '../config/Keys';
import { resetAxiosAuth } from '../utils/axios';
import { Auth as auth } from './auth';
import { User as user } from './user';

export const Store = types
  .model('Store', {
    auth,
    user
  })
  .actions(self => ({
    makeInit: flow(function* () {
      let result = false;

      yield makeAccount();

      resetAxiosAuth();

      result = true;

      return result;
    }),
  }))
  .create({
    auth: {},
    user: {}
  });

export const createStore = () => {
  return Store.makeInit();
};

const makeAccount = flow(function* () {
  const data = window.localStorage.getItem(`REACT_MST_SASS_WEBPACK_BOILERPLATE_${Keys.storeVersion}`);
  if (data !== null) {
    yield Store.auth.updateAccount(JSON.parse(data));
  }
});

onSnapshot(Store.auth.userInfo, (snapshot) => {
  if (snapshot.token) {
    window.localStorage.setItem(
      `REACT_MST_SASS_WEBPACK_BOILERPLATE_${Keys.storeVersion}`,
      JSON.stringify(snapshot)
    );
  }
});
