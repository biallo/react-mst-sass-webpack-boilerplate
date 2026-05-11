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
import { Link } from 'react-router-dom';

const Error = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      <h3>404</h3>
      <h5>找不到页面</h5>
      <Link to="/">返回主页</Link>
    </div>
  );
};

export default inject('store')(observer(Error));
