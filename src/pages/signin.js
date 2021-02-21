import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/signin/form';
import { fetchLogin } from '../components/signin/service';
import { userUserContext } from '../contexts/user-context';

const Signin = () => {
  const { setUser } = userUserContext();
  const history = useHistory();
  const handleSubmit = async (formValues) => {
    const user = await fetchLogin(formValues);

    if (user) {
      setUser(user);
      history.replace('/');
    } else {
      alert('입력한 정보를 다시 확인해주세요');
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} />
    </>
  );
};

export default Signin;
