import React from "react";
import Counter from "./counter";
import { useState } from "react";
export default function Counters() {
  const [counter, setCounter] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 3 },
    { id: 3, value: 4 },
    { id: 4, value: 5 },
    { id: 5, value: 6 },
  ]);
  const handleDelte = (counterId) => {
    const counte = counter.filter((m) => m.id !== counterId);
    setCounter(counte);
    console.log("Deleted " + counterId);
  };
  return (
    <>
      {counter.map((m) => (
        <Counter key={m.id} counter={m}  onDelete={handleDelte}>
          <h2>CounterApp #{m.id}</h2>
        </Counter>
      ))}
    </>
  );
}
