import React from "react";
import { Link } from 'react-router-dom';

// horizontal navbar
function Navbar() {
  return (
    <nav class='navbar'>
      <ul>
        <li class='active'>
          <Link to="/" >Home</Link>
        </li>
        <li >
          <Link to="/register">Register</Link>
        </li>
        <li >
          <Link to="/login">Login</Link>
        </li>
        <li >
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;