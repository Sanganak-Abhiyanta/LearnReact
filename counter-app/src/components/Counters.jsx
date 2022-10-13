import React from "react";
import Counter from "./counter";
import { useState } from "react";
export default function Counters() {
  const [counters, setCounter] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 3 },
    { id: 3, value: 4 },
    { id: 4, value: 5 },
    { id: 5, value: 6 },
  ]);
  const handleIncrement = counter => {
    const count=[...counters];
    const index=count.indexOf(counter);
    count[index]={...counter};
    count[index].value++;
    setCounter(count);
    console.log(count[0]);
  };
  const handleDecrement = (counter) => {
  };
  const handleReset = (counter) => {

  };
  const handleDelte = (counterId) => {
    const counte = counters.filter((m) => m.id !== counterId);
    setCounter(counte);
    console.log("Deleted " + counterId);
  };
  return (
    <>
      {counters.map((m) => (
        <Counter
          key={m.id}
          counter={m}
          onDelete={handleDelte}
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
