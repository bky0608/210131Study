import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const horizontalCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 2px solid #0bde8b;
  background-color: #fff;
  padding: 20px 60px;
  box-sizing: border-box;
`;

const ArrowIcon = styled(Link)`
  ${horizontalCenter}
  left: 18px;
  display: block;
  width: 21px;
  height: 18px;
  background-position: -164px -343px;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

const SearchIcon = styled.span`
  ${horizontalCenter}
  right: 18px;
  width: 24px;
  height: 24px;
  background-position: -356px -260px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: middle;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

const RemoveIcon = styled.span`
  ${horizontalCenter}
  right: 0px;
  width: 20px;
  height: 20px;
  background-position: -389px -29px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  background-color: #fff;
  font-weight: 700;
  font-size: 20px;
  box-sizing: border-box;
  ${({ active }) =>
    active &&
    `
    padding-right: 25px; 
  `}
`;

const SearchBar = ({ onAddKeyword }) => {
  const [keyowrd, setKeyowrd] = useState('');
  const inputRef = useRef();

  const handleKeyword = (e) => {
    setKeyowrd(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      if (inputRef.current.value === '') return;
      onAddKeyword(keyowrd);
      setKeyowrd('');
    }
  };

  const handleClick = () => {
    if (inputRef.current.value === '') return;
    onAddKeyword(keyowrd);
    setKeyowrd('');
  };

  return (
    <Container>
      <ArrowIcon to="/" />
      <InputContainer>
        <Input
          value={keyowrd} //
          onChange={handleKeyword}
          onKeyDown={handleEnter}
          ref={inputRef}
        />
      </InputContainer>
      <SearchIcon onClick={handleClick} />
    </Container>
  );
};

export default SearchBar;
