import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import InputBlock from "./InputBlock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: "",
      minValue: 0,
      maxValue: 0,
      stepValue: 0,
    };
  }
  localStorage=()=>{
    window.localStorage.setItem("currentNum", this.state.currentNum)
    window.localStorage.setItem("minValue", this.state.minValue)
    window.localStorage.setItem("maxValue", this.state.maxValue)
    window.localStorage.setItem("stepValue", this.state.stepValue)
  }
  changeCurrentNum = (event) => {
    this.setState({
      currentNum: Number(event.target.value),
    });
  };

  changeMin = (event) => {
    this.setState({
      minValue: Number(event.target.value),
    });
  };

  changeMax = (event) => {
    this.setState({ maxValue: Number(event.target.value) });
  };

  changeStep = (event) => {
    this.setState({ stepValue: Number(event.target.value) });
  };

  clickIncrease = () => {
    if (this.state.currentNum + this.state.stepValue <= this.state.maxValue) {
      this.setState(() => ({
        currentNum: +this.state.currentNum + this.state.stepValue,
      }));
    }
  };

  clickDecrease = () => {
    if (this.state.currentNum - this.state.stepValue >= this.state.minValue) {
      this.setState(() => ({
        currentNum: this.state.currentNum - this.state.stepValue,
      }));
    }
  };

  clickReset = () => {
    this.setState(() => ({
      currentNum: 0,
    }));
  };

  render() {
    return (
      <div className="container">
          <h1>{this.state.currentNum}</h1>
          <InputBlock htmlFor="min" numName="Cur Number" id="min" onChange={this.changeCurrentNum}/>
          <InputBlock htmlFor="min" numName="Min Number" id="min" onChange={this.changeMin}/>
          <InputBlock htmlFor="max" numName="Max Number" id="max" onChange={this.changeMax}/>
          <InputBlock htmlFor="step" numName="Step Change" id="step" onChange={this.changeStep}/>
          <div>
            <Buttons onClick={this.clickIncrease} btnName="Increase"/>
            <Buttons onClick={this.clickDecrease} btnName="Decrease"/>
            <Buttons onClick={this.clickReset} btnName="Reset"/>
          </div>
      </div>
    );
  }
}

export default App;
