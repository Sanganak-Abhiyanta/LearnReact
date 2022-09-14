import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<AddBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
