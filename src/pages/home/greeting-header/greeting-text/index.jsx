import GreetingTextStyled from './index.styled.js';
import TypingEffect from '../../../../utility/typing-effect.jsx';
import React from 'react';

class GreetingText extends GreetingTextStyled {
  render() {

    return (
      <GreetingTextStyled>
        <TypingEffect string="some string"/>
      </GreetingTextStyled>
    );
  }
}

export default GreetingText;
