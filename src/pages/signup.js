import React from 'react';
import Form from '../components/signup/form';
import { requestSignup } from '../components/signup/service';

const Signup = () => {
  // 호원가입
  const handleSubmit = async (fromValue) => {
    try {
      if (await requestSignup(fromValue)) {
        alert('회원가입에 성공했습니다.');
      } else {
        alert('회원가입에 실패했습니다.');
      }
    } catch (e) {
      alert('일시적으로 오류가 발생했습니다. 잠시후 다시 시도해주세요');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;
