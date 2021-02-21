import React from 'react';
import { useHistory } from 'react-router-dom';
import { userUserContext } from '../contexts/user-context';

const MyInfo = () => {
  const { setUser } = userUserContext();
  const history = useHistory();

  const handleLogout = () => {
    setUser(null);
    history.replace('/');
  };
  return (
    <div>
      내정보 페이지
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default MyInfo;
