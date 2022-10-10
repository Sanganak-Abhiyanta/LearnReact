import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: this.props.value,
    // imageUrl:"https://picsum.photos/500"
    // tags: ["tag","tag1","Tag3", "TAG4"],
  };
  // =========================incomponet style==================================
  // style={
  //   fontSize:59,
  //   fontWeight:"bold"
  // }
  // =================================================================================
  // conditional Render
  // renderTag() {
  //   if (this.state.tags.length === 0) {
  //     return <h1>There are no Tags here!</h1>;
  //   }
  //   return (
  //     <ol>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ol>
  //   );
  // }
  // ==========================================================================================
  // Handling an event<========================================
  handleIncrement=()=>
  {
    this.setState({count:this.state.count+1})
  }
  handleDecrement=()=>{
    this.setState({count:this.state.count-1})
  }
  handleReset=()=>{
    this.setState({count:0})
  }
  // =========================>Bining Event Handlers<===============================================

  render() {
    return (
      <>
        {/* <img src={this.state.imageUrl} alt="" srcset="" /> */}

        <span className={this.getButtonClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary mx-2">Increment</button>
        <button onClick={this.handleDecrement} className="btn btn-success mx-2">Decrement</button>
        <button onClick={this.handleReset} className="btn btn-warning mx-2">Reset</button>
        {/* =================Map method to render javascript objects and array ==================================*/}
        {/* <ol>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ol> */}

        {/* ===========================================Conditional Rendering============================== */}
        {/* {
        this.renderTag()  
        }
        {
        this.state.tags.length===0 && "Please create the tags"
        } */}
      </>
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
