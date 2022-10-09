import React from "react";
import Counter from "./counter";
export default function Counters() {
  const counter = [
    { id: 1, value: 4 },
    { id: 2, value: 3 },
    { id: 3, value: 4 },
    { id: 4, value: 5 },
    { id: 5, value: 6 },
  ];
  return (
    <>
      {counter.map(m =>
        <><Counter key={m.id} value={m.value} />
        <br /></>
      )}
      
    </>
  );
}
