import React from 'react'
import './App.css';
import Buttons from './Components/Buttons/Buttons'
import Input from './Components/Input/Input'
import Clear from './Components/Clear/Clear'
import * as math from 'mathjs'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    }

    this.addToInput = this.addToInput.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  addToInput(val) {
      if(val === "X") {
        val = "*"
      }
      this.setState({input: this.state.input + val});
  }

  handleEqual() {
    this.setState({input: math.evaluate(this.state.input)});
  }

  handleClear() {
    this.setState({input: ""})
  }

  render() {
    return (
      <div className="page">
        <div className="Calc">
        <Input input={this.state.input}></Input>
        <Buttons handleClick={this.addToInput} handleEquals={this.handleEqual}/>
        <Clear handleClear={this.handleClear}/>
        </div> 
      </div>
    )
  }
}

export default App;
