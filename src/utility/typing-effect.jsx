import React from 'react';

class TypedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentString: "",
      currentIndex: 0,
      displayCursor: true
    }
  }

  componentDidMount() {
    this.typeEffect = setInterval(()=>{
      return this.typeTheString();
    }, 150);
  }

  componentWillUnmount() {
    clearInterval(this.typeEffect);
  }

  typeTheString(){
    const fullString = this.props.string;
    if(this.state.currentIndex < fullString.length){
      let currentValue = this.state.currentString;
      let nextChar = fullString[this.state.currentIndex];
      let newString = `${currentValue}${nextChar}`;
      // This might be bad, how do I make it better?
      let nextIndex = this.state.currentIndex + 1;
      this.setState({
        currentString: newString,
        currentIndex: nextIndex
      });
    }else {
      this.setState({
        displayCursor: false
      })
      clearInterval(this.typeEffect);
    }
  }

  render() {
    const cursorElem = this.state.displayCursor ? "|" : "";
    const currentString = this.state.currentString + cursorElem;
    return (
      <span>{currentString}</span>
    );
  }
}

export default TypedComponent;
