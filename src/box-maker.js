import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100px;
  height: 30px;
  border: 1px solid;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid;
  ${(props) => {
    return `background-color: ${props.color};`;
  }}
`;

function BoxMaker() {
  const [color, setColor] = useState('#fff');

  const handleCOlor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <Input type="text" onChange={handleCOlor} />
      <Box color={color}>Box</Box>
    </div>
  );
}

export default BoxMaker;
