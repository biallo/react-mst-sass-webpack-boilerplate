import
  React,
  {
    useState,
    useEffect
  }
from 'react';
import {
  observer,
  inject
} from 'mobx-react';
import { Routes, Route } from 'react-router-dom';
import Error from '../pages/error/Error';
import Login from '../pages/auth/Login';
import User from '../pages/user/User';

const Router = (props) => {
  const { store } = props;
  const { token } = store.auth.userInfo;

  if (token) {
    return (
      <div className="page-wrapper">
        <Routes>
            <Route path="/" element={ <User /> } />
            <Route path="*" element={ <Error /> } />
          </Routes>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="*" element={ <Error/> } />
    </Routes>
  );
};

export default inject('store')(observer(Router));
