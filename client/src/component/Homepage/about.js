import React from "react";
import { Link } from 'react-router-dom';
// import food from "../../food.jpg";

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
                        <Link to="/about">About Us</Link>
                    </li>
                </ul>

            </nav>

            <div class="bg-light">
                <div class="container py-5" >
                    <div class="row h-100 align-items-center py-5" >
                        <div class="col-lg-6">
                            <h1 class="display-1">About Us</h1>
                            <p class="lead text-muted mb-0">
                                Do you want a perfect meal? Do you find grocery shopping list troubling?<br />
                                Do you want an auto-generated grocery list which directs you to a perfect meal?<br />
                                Check out our website and your next perfect meal is awaiting!<br />
                            </p>
                        </div>
                        {/* <div class="col-lg-6 d-none d-lg-block"><img src={food} alt="" class="img-fluid" /></div> */}
                        <div class="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid" /></div>
                    </div>
                </div>
                </div>

                <div class="bg-white py-5">
                <div class="container py-5">
                    <div class="row align-items-center mb-5">
                    <div class="col-lg-6 order-2 order-lg-1">
                        <h2 class="font-weight-light">Our Aim</h2>
                        <p class="font-italic text-muted mb-4">
                            Food preparation is a vital aspect of our daily routine.<br />
                            We devote a substantial amount of time scouring through various recipes so as to attempt to create the perfect meal.<br />
                            However, even before we try to cook, we must first come up with a grocery shopping list, which can be a tedious task.<br />
                            Therefore, we have devised a website that can do the work for you!<br />
                            Simply select the recipe that you are interested in, and we will generate a comprehensive shopping list for you automatically!<br />


                        </p>
                    </div>
                    <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                    <div class="row align-items-center">
                    <div class="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                    <div class="col-lg-6">
                        <h2 class="font-weight-light">Begin Your Journey</h2>
                        <p class="font-italic text-muted mb-4">
                            We offer customized library for each user. To have your own library of recipes,<br />
                            please register an account with us. You can find the registration link on our homepage.<br />
                            Once you successfully register your account, everytime when you login in, you can find your saved recipes and corresponding grocery lists.<br />

                        </p>
                    </div>
                    </div>
                    <div class="row align-items-center mb-5">
                    <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                        <h2 class="font-weight-light">From Recipe To Grocery List</h2>
                        <p class="font-italic text-muted mb-4">
                            We offer a large number of built-in recipes, but you can always add your own recipe to the website!<br />
                            Our website has daily recommendations, and you can check out 'Highlighted' if you need some inspiration for your meal!<br />
                            To find the recipe that you are interested in, just use the 'Search' page and you can look for recipes you want.<br />
                            To generate the shopping list, just click 'Add to list' under the recipe that you are interested in, and the shopping list will be automatically saved in your account.<br />
                            If you want to save the recipe for later use, click the heart icon and it will be saved to your favorite list.<br />
                        </p>
                    </div>
                    <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                </div>
                </div>

        </div>

    );
}

export default About;