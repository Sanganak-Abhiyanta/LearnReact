import React from "react";
import Counter from "./counter";
//when we remove "props" and "props." and use direct name of props in the child component it is called object destructuring , we have to use {}
 
export default function Counters({resetAll,counter,onDelete,handleDecrement,handleIncrement,handleReset}) {
  
  return (
    <>
      <button onClick={resetAll} className="btn btn-warning mx-2 btn-sm">
        Reset
      </button>
      {counter.map((m) => (
        <Counter
          key={m.id}
          counter={m}
          onDelete={onDelete}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
        >
          <h2>CounterApp #{m.id}</h2>
        </Counter>
      ))}
    </>
  );
}
