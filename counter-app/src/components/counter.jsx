import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleReset = () => {
    this.setState({ count: 0 });
  };
  // =========================>Bining Event Handlers<===============================================

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" srcset="" /> */}
        {this.props.children}
        <span className={this.getButtonClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary mx-2"
        >
          Increment
        </button>
        <button onClick={this.handleDecrement} className="btn btn-success mx-2">
          Decrement
        </button>
        <button onClick={this.handleReset} className="btn btn-warning mx-2">
          Reset
        </button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">
          Delete
        </button>
      </div>
    );
  }
  // ==============================================
  getButtonClasses() {
    let classes = "btn m-2 mx-2 my-2 m-2 btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  // =========================================================
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
