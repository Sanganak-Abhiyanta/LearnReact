import './App.css';
import NavBar from './components/NavBar';
import Counters from "./components/Counters";
function App() {
  return (
   <>
   <NavBar/>
   <main className="container">
    <Counters/>
   </main>
   </>
  );
}

export default App;
