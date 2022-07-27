import React from 'react';
import Keys from '../../config/Keys';
import { Store } from '../../stores';

export function getAuthToken() {
  const data = window.localStorage.getItem(`REACT_MST_SASS_WEBPACK_BOILERPLATE_${Keys.storeVersion}`);
  if (data !== null) {
    return (JSON.parse(data)).token;
  } else {
    return '';
  }
}

export function getResult(response) {
  if (Store && response) {
    if (response.data.code === 0) {
      return response.data;
    }

    // 提示错误消息（实际项目中推荐可替换为你认为体验更好的提示方式）
    alert(response.data.msg);

    if (response.data.code === 4000) { // 未登录
      Store.auth.unauthorized(true);
    } else { // 其它错误
      return null;
    }
  }
}

export function getErrorObject(response) {
  // No response data, probably no network or 500
  let errorCode = 'unknown';
  let errorMessage = '';
  const statusCode = response ? response.status : -1;
  if (response && response.data) {
    errorCode = response.data.statusCode;
    errorMessage = response.data.message;
  }

  return {
    message: statusCode === 500 || statusCode === 404 ? errorCode : errorMessage,
    status: statusCode
  };
}

export function reactOnStatusCode(error) {
  if (Store && error) {
    switch (error.status) {
      case 400:
        alert(`${error.status} ${error.message}`);
        break;
      case 401:
        // If my token become invalid, clear token and open login (if not alive api)
        Store.auth.unauthorized(true);
        break;
      case 403:
        Store.auth.unauthorized(true);
        break;
      default:
    }
  }
}
