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
            <p>Food preparation is a vital aspect of our daily routine.
            We devote a substantial amount of time scouring through various recipes so as to attempt to create the perfect meal.
            However, even before we try to cook, we must first come up with a grocery shopping list, which can be a tedious task.
            Therefore, we have devised a website that can do the work for you!
            Simply select the recipe that you are interested in, and we will generate a comprehensive shopping list for you automatically! </p>
        </div>

    );
}

export default About;