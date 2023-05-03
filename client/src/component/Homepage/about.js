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
            <p>Do you want a perfect meal? Do you find grocery shopping list troubling? Do you want
             a auto-generated grocery list which directs you to a perfect meal? Check out our website
             and your next perfect meal is awaiting! </p>
        </div>

    );
}

export default About;