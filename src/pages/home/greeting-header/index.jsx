import styled from 'styled-components';
import GreetingText from './greeting-text/index.jsx';
import React from 'react';

const GreetingHeader = styled.h1`
  text-align: center;
`;

const GreetingBlock = () => (
  <div>
    <GreetingHeader>Hello</GreetingHeader>
    <GreetingText />
  </div>

);

export default GreetingBlock;
