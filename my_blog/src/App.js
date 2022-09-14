import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar />
              <div className="content">
                <Home />
              </div>
            </div>
          }
        />
        <Route path="/create" element={<AddBlog/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
