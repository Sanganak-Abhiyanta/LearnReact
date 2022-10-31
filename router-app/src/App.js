import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Posts from "./components/Posts";
import Dashboard from "./components/admin/Dashboard";
import Home from "./components/Home"


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/products" element={<Products/>}/>
              <Route path="/posts" element={<Posts/>}/>
              <Route path="/admin" element={<Dashboard/>}/>
              <Route path="/"  element={<Home/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
