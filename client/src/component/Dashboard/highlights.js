import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import randomRecipes from './randomRecipes.json';



function Highlights( { route, navigation}) {
    const { state } = useLocation();
    return (
        <div class="dashboard">
            <nav class="navbar inverse">
                <ul>
                    <li >
                        <Link to="/register">Home</Link>
                    </li>
                    <li >
                        <Link to="/login">Logout</Link>
                    </li>
                    <li >
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>


            <div class="sidenav">
                <Link to="/userinfo" state={state}>User: {state.name}</Link>
                <Link to="/highlights" state={state}>Highlights</Link>
                <Link to="/recipes" state={state}>Search</Link>
                <Link to="/recipes" state={state}>Favorite Recipes</Link>
                <Link to="/shoppinglist" state={state}>Shopping List</Link>
            </div>

            <div class="container">
                {randomRecipes.slice(0,4).map(function (data, index) {
                if (index < 4) {
                    return (
                        <div class="card item" style={{ width: 220}}>
                            <img src={data.strMealThumb} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{data.strMeal}</h5>
                                <p class='card-text'>
                                {data.strArea}<br />
                                Ingredient: {data.strCategory}
                                </p>
                                <a href="/" class="btn btn-primary">Add to list</a>
                                <i class="bi bi-bookmark-heart float-end"></i>
                                {/* <i class="bi bi-bookmark-heart-fill float-end"></i> */}
                            </div>
                        </div>
                    )
                }
                return 0;
            })}
            </div>


        </div>
    )
}

export default Highlights;
