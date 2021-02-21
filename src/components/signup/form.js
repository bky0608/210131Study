import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

function Form({ onSubmit }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  });

  const handleSubmit = () => {
    const { email, password, name } = user;

    onSubmit({ email, password, name });
  };

  const handleFromValues = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const { email, password, rePassword, name } = user;
  const isMatchedPassword = password && rePassword && password === rePassword;
  const isSubmittable = email && name && isMatchedPassword;

  return (
    <Container>
      <Input
        name="email" //
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={handleFromValues}
      />
      <Input //
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={handleFromValues}
      />
      <Input
        name="rePassword" //
        type="rePassword"
        placeholder="비밀번호를 다시 입력해주세요"
        value={rePassword}
        onChange={handleFromValues}
      />
      <Input
        name="name" //
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={handleFromValues}
      />
      <Button
        disabled={!isSubmittable} //
        onClick={isSubmittable ? handleSubmit : () => {}}
      >
        회원가입
      </Button>
    </Container>
  );
}

export default Form;
