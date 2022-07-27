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

const Error = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      <h3>404</h3>
      <h5>找不到页面</h5>
      <a href="/">返回主页</a>
    </div>
  );
};

export default inject('store')(observer(Error));
