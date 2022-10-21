import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-light bg-light">
          <h1 class="navbar-brand">Navbar  <span class="badge badge-pill badge-info bg-dark">{this.props.totalCounters}</span></h1>
          
        </nav>
      </>
    );
  }
}
