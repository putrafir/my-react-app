import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.setState({ count: 10 });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("terdapat perubahan");

    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }
  render() {
    return (
      <div className=" flex items-center">
        <h1>{this.state.count}</h1>
        <button
          className=" mx-2"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}
