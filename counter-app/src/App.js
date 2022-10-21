
import NavBar from "./components/NavBar";
import Counters from "./components/Counters";
import { useState } from "react";
function App() {
  const [counters, setCounter] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 3 },
    { id: 3, value: 4 },
    { id: 4, value: 5 },
    { id: 5, value: 6 },
  ]);
  const handleIncrement = (counter) => {
    const count = [...counters];
    const index = count.indexOf(counter);
    count[index] = { ...counter };
    count[index].value++;
    setCounter(count);
    // console.log(count[0]);
    // console.log(counter)
  };
  const handleDecrement = (counter) => {
    const count = [...counters];
    const index = count.indexOf(counter);
    count[index] = { ...counter };
    count[index].value--;
    setCounter(count);
  };
  const handleReset = (counter) => {
    const count = [...counters];
    const index = count.indexOf(counter);
    count[index] = { ...counter };
    count[index].value = 0;
    setCounter(count);
  };
  const resetAll = () => {
    const counter = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounter(counter);
  };
  const handleDelte = (counterId) => {
    const counte = counters.filter((m) => m.id !== counterId);
    setCounter(counte);
    console.log("Deleted " + counterId);
  };
  return (
    <>
      <NavBar totalCounters={counters.filter(counter=> counter.value>0).length} />
      <main className="container">
        <Counters
          counter={counters}
          resetAll={resetAll}
          onDelete={handleDelte}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
        />
      </main>
    </>
  );
}

export default App;
