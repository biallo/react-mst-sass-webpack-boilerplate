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
import Images from '../../assets';
import { checkEmail } from '../../utils/Validate';

const Login = (props) => {
  const { store } = props;
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (email && pwd) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [email, pwd]);

  const handleSubmit = async () => {
    if (!checkEmail(email)) {
      alert('请输入合规的邮箱');
      return;
    }

    if (pwd.length < 8 || pwd.length > 32) {
      alert('请输入合规的密码');
      return;
    }

    // 实际项目中，密码等敏感数据应做非对称加密再通过网络传输及存储
    const res = await store.auth.login({
      email: email,
      pwd: pwd
    });

    if (res) {
      const data = res.data;

      await store.auth.updateAccount(data);

      alert('登录成功！');
    }
  };

  return (
    <div className="page-login">
      <div>
        <img
          className="logo"
          src={Images.logo}
        />
      </div>
      <div>
        <input
          className="login-input"
          type="text"
          placeholder="邮箱"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className="login-input"
          type="password"
          placeholder="密码"
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <button
        className="login-submit"
        disabled={submitDisabled}
        onClick={() => handleSubmit()}
      >
        登录
      </button>
    </div>
  );
};

export default inject('store')(observer(Login));
