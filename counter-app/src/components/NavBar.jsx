import React from "react";
//stateless functional components
const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <h1 className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-info bg-dark">
            {props.totalCounters}
          </span>
        </h1>
      </nav>
    </>
  );
};

export default NavBar;
