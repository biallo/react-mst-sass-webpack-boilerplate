// 字符串长度范围
export const checkLenth = (str, min, max) => {
  return str && str.length >= min && str.length <= max;
};

// 邮箱格式
export const checkEmail = (str) => {
  return (
    new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  ).test(str);
};

// 小数位数
export const checkDecimalLength = (number, length) => {
  return (
    new RegExp('^[0-9]+(.[0-9]{1,' + length + '})?$')
  ).test(number);
};

// n 位数字
export const checkNumByLength = (str, n) => {
  return (new RegExp('^[0-9]{' + n + '}$')).test(str);
};
