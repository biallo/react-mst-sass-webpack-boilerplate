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

import { useNavigate } from 'react-router-dom';
import { ACCOUNT_ACTIVITIES_TYPE } from '../../utils/Constants';

const formatUtcOffsetDate = (value, offsetHours = 8) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const offsetDate = new Date(date.getTime() + offsetHours * 60 * 60 * 1000);
  const pad = (number) => String(number).padStart(2, '0');

  return [
    offsetDate.getUTCFullYear(),
    pad(offsetDate.getUTCMonth() + 1),
    pad(offsetDate.getUTCDate())
  ].join('-') + ' ' + [
    pad(offsetDate.getUTCHours()),
    pad(offsetDate.getUTCMinutes()),
    pad(offsetDate.getUTCSeconds())
  ].join(':');
};

const UserDetail = (props) => {
  const { store } = props;
  const navigate = useNavigate();
  const { id } = store.auth.userInfo;
  const [activities, setActivities] = useState();

  useEffect(() => {
    (async function () {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    await store.user.getActivities({
      id: id
    });
    setActivities(store.user.activities);
  };

  const handleLogout = async () => {
    await store.auth.removeAccount();
    navigate('/');
  };

  if (!activities) {
    return null;
  }

  if (activities.length < 1) {
    return (
      <div style={{textAlign: 'center'}}>暂无数据</div>
    );
  }

  return (
    <div className="page-user">
      <div className="list-activities">
        {activities.map((item, index) => {
          return (
            <div key={index} className="list-container">
              <div className="list-item">
                <div className="list-helper-text">类型</div>
                <div>{ACCOUNT_ACTIVITIES_TYPE[item.actionType]}</div>
              </div>
              <div className="list-item">
                <div className="list-helper-text">所在地</div>
                <div>{item.location}</div>
              </div>
              <div className="list-item">
                <div className="list-helper-text">IP 地址</div>
                <div>{item.ip}</div>
              </div>
              <div className="list-item">
                <div className="list-helper-text">时间</div>
                <div>{formatUtcOffsetDate(item.createdTime)}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleLogout}
      >
        退出登录
      </button>
    </div>
  );
};

export default inject('store')(observer(UserDetail));
