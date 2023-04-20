import React from "react";
import { Link } from 'react-router-dom';
function About() {
    return (
        <div class='home'>

            <nav class='navbar'>
                <ul>
                    <li class='actived'>
                        <Link to="/" >Home</Link>
                    </li>
                    <li >
                        <Link to="/register">Register</Link>
                    </li>
                    <li >
                        <Link to="/login">Login</Link>
                    </li>
                    <li class='active'>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

            </nav>

            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque
                ratione amet. Earum dolores, qui, hic provident atque natus cumque
                laboriosam quam nesciunt illo ut dolorem eos eligendi ullam
                consequuntur?  </p>
        </div>

    );
}

export default About;