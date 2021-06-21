import React, { Component } from "react";
import "./App.css";
//React Fragment and this.setState() is asynchronous
//Functional this.setState()

class Counter extends Component {
  state = {
    count: 0
  };
  hanleIncrease = () => {
    // console.log("called first :", this.state.count);
    this.setState(
      {
        count: this.state.count + 1
      }
      // () => console.log("called second :", this.state.count)
    );
    // this.setState({
    //   count: this.state.count + 2
    // });
    // console.log("called third :", this.state.count);
  };
  hanleDecrease = () => {
    console.log("called first :", this.state.count);
    this.setState(
      (state, props) => {
        return { count: state.count - props.amount };
      },
      () => console.log("called second :", this.state.count)
    );
    // this.setState((state, props) => {
    //   return { count: state.count - 2 };
    // });
    console.log("called third :", this.state.count);
  };

  render() {
    return (
      <>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button type="button" onClick={this.hanleDecrease}>
            decrease
          </button>
          <span style={{ margin: "1rem" }}>count : {this.state.count}</span>
          <button type="button" onClick={this.hanleIncrease}>
            increase
          </button>
        </div>
      </>
    );
  }
}

class App extends Component {
  render() {
    return <Counter amount="2" />;
  }
}

export default App;
