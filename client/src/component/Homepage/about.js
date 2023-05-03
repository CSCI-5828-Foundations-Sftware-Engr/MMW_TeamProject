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
            <h3>Our Aim</h3>
            <p>
            Food preparation is a vital aspect of our daily routine.
            We devote a substantial amount of time scouring through various recipes so as to attempt to create the perfect meal.
            However, even before we try to cook, we must first come up with a grocery shopping list, which can be a tedious task.
            Therefore, we have devised a website that can do the work for you!
            Simply select the recipe that you are interested in, and we will generate a comprehensive shopping list for you automatically!
            </p>

            <h3> Begin Your Journey</h3>
            <p>
            We offer customized library for each user. To have your own library of recipes,
            please register an account with us. You can find the registration link on our homepage.
            Once you successfully register your account, everytime when you login in, you can find your saved recipes and corresponding grocery lists.
            </p>

            <h3>From Recipe To Grocery List</h3>
            <h4>Add Recipes To Your Account</h4>
            <p>
            We offer a large number of built-in recipes, but you can always add your own recipe to the website!
            For recipes offered by us, just find the recipe that you are interested in, and click 'Add to list', so you can add the recipe to your account.
            For recipes from external resources, ???
            </p>
            <h4>Generate Your Shopping List</h4>
            <p>
            Once the recipe has been saved to your account, you can generate the shopping list just by one click!
            </p>

        </div>

    );
}

export default About;