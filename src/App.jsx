import React from 'react';
import './App.css';
class Calculator extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     displayValue: "", 
   };
 }

 handleButtonClick = (value) => {
  if (value === "=") {
    this.calculateResult();
  } else if (value === "c") {
    this.clearDisplay();
  } else {
    this.setState((prevState) => ({
      displayValue: prevState.displayValue + value,
    }));
  }
};

calculateResult = () => {
  try {


    const result = eval(this.state.displayValue);
    this.setState({ displayValue: result });
  } catch (error) {
    this.setState({ displayValue: "Error" });
  }
};
clearDisplay = () => {
  this.setState({ displayValue: "",
 });
}; 
 render() {
    return (
      <>
   <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">{this.state.displayValue}</div>
        <div className="buttons">
          <button onClick={() => this.handleButtonClick('7')}className='numberButton'>7</button>
          <button onClick={() => this.handleButtonClick('8')}className='numberButton'>8</button>
          <button onClick={() => this.handleButtonClick('9')}className='numberButton'>9</button>
          <button onClick={() => this.handleButtonClick('/')}className='symbol'>/</button>

         <button onClick={() => this.handleButtonClick('4')}className='numberButton'>4</button>
          <button onClick={() => this.handleButtonClick('5')}className='numberButton'>5</button>
          <button onClick={() => this.handleButtonClick('6')}className='numberButton'>6</button>
          <button onClick={() => this.handleButtonClick('*')} className='symbol'>*</button>

          <button onClick={() => this.handleButtonClick('1')}className='numberButton'>1</button>
          <button onClick={() => this.handleButtonClick('2')}className='numberButton'>2</button>
          <button onClick={() => this.handleButtonClick('3')}className='numberButton'>3</button>
          <button onClick={() => this.handleButtonClick('-')} className='symbol'>-</button>

          <button onClick={() => this.handleButtonClick('0')}className='numberButton'>0</button>
          <button onClick={() => this.handleButtonClick('.')}className='numberButton'>.</button>
          <button onClick={this.clearDisplay} className='ClearButton'>C</button>
          <button onClick={() => this.handleButtonClick('+')}className='symbol'>+</button>
          
          <button onClick={() => this.handleButtonClick('+')}className='symbol'>%</button>
          <button onClick={() => this.handleButtonClick('=')} className="equals">
            =
          </button>
        </div>
      </div>
      </>
    );
  }
}

export default Calculator;