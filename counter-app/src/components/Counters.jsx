import React from "react";
import Counter from "./counter";

export default function Counters(props) {
  
  return (
    <>
      <button onClick={props.resetAll} className="btn btn-warning mx-2 btn-sm">
        Reset
      </button>
      {props.counter.map((m) => (
        <Counter
          key={m.id}
          counter={m}
          onDelete={props.onDelete}
          handleIncrement={props.handleIncrement}
          handleDecrement={props.handleDecrement}
          handleReset={props.handleReset}
        >
          <h2>CounterApp #{m.id}</h2>
        </Counter>
      ))}
    </>
  );
}
