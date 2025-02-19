import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/">
          Word Counter
        </a>
      </div>
    </nav>
  );
};

export default Navbar