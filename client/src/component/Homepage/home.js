import React from "react";
import background from "../../background_image_home.jpg";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
      opacity: 0.9
    }} class='home'>

      <nav class='navbar'>
        <ul>
          <li class='active actived'>
            <Link to="/" >Home</Link>
          </li>
          <li >
            <Link to="/register">Register</Link>
          </li>
          <li >
            <Link to="/login">Login</Link>
          </li>
          <li >
            <Link to="/about">About</Link>
          </li>
        </ul>

      </nav>

      <h2>Home</h2>
      <p>Do you want a perfect meal? Do you find grocery shopping list troubling? Do you want
      a auto-generated grocery list which directs you to a perfect meal? Check out our website
      and your next perfect meal is awaiting!  </p>
    </div>

  );
}

export default Home;