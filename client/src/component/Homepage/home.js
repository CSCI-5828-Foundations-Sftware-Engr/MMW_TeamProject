import React, { useEffect } from "react";
import background from "../../background_image_home.jpg";
import { Link } from 'react-router-dom';
function Home() {

  useEffect(() => {
    document.title = 'Home';
  }, []);
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

      <h2 style={{ fontSize: "5rem" }}>Home</h2>
      <p style={{ fontSize: "2rem" }}>Do you want a perfect meal?<br />
        Do you find grocery shopping list troubling?<br />
        Do you want an auto-generated grocery list which directs you to a perfect meal?<br />
        Check out our website and your next perfect meal is awaiting!  </p>
    </div>

  );
}

export default Home;