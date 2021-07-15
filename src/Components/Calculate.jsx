import React from "react";
import "../Calculate.css";
import Buttons from "./Buttons";
import InputBlock from "./InputBlock";

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: window.localStorage.getItem("currentNum"),
      minValue: window.localStorage.getItem("minValue"),
      maxValue: window.localStorage.getItem("maxValue"),
      stepValue: window.localStorage.getItem("stepValue"),
    };
  }

  componentDidUpdate(){
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
          <h1>Current: {this.state.currentNum}</h1>
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

export default Calculate;
