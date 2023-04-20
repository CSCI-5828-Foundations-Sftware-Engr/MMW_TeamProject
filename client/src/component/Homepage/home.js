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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque
        ratione amet. Earum dolores, qui, hic provident atque natus cumque
        laboriosam quam nesciunt illo ut dolorem eos eligendi ullam
        consequuntur?  </p>
    </div>

  );
}

export default Home;