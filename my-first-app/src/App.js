import './App.css';
import {React,useState} from 'react';

function App() {
  const [counter, setCounter]=useState(0);
  const increment=()=>{
    setCounter(counter+1);
  }
  const decrement=()=>{
    setCounter(counter-1);
  }
  const reset=()=>{
    setCounter(0);
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>Counter App</h1>
       <br />
       <hr />
       <h4>Counter : </h4>
       <input type="text" value={counter} />

       <button className="btn_inc" onClick={increment}>Increment</button>

       <button className="btn_dec" onClick={decrement}>Decrement</button>
       <button className="reset" onClick={reset}>Reset</button>

      </header>
    </div>
  );
}

export default App;
