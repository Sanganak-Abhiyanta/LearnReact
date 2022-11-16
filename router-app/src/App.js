import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import Posts from "./components/Posts";
import Dashboard from "./components/admin/Dashboard";
import ProductDetails from "./components/productDetails";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="content">
           <Switch>
           <Route path="/products" component={Products} />
           <Route path="/posts" component={Posts} />
           <Route path="/admin" component={Dashboard} />
           <Route path="/" component={Home} />
           {/* <Route path="/" exact component={Home} /> //exact is one solution and Switch is another one */}
           
           </Switch>
           
          </div>
        </div>
      </Router>
    );
  }
}
