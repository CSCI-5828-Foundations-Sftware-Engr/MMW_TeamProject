import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import randomRecipes from './randomRecipes.json';

const API_URL = "https://www.themealdb.com/api/json/v2/9973533/randomselection.php";

function Highlights( { route, navigation}) {
    const { state } = useLocation();

    const [recipes, setRecipes] = useState([]);
    // const [searchTerm, setSearchTerm] = useState([]);

    const searchRecipes = async () => {
        const response = await fetch(`${API_URL}`);
        const data1 = await response.json();
        console.log(data1);
        console.log(typeof(data1));
        console.log(data1.meals);
        console.log(typeof(data1.meals));
        setRecipes(data1.meals);
        console.log("clicked");
        console.log(recipes.length);
    }

    useEffect(() => {
        searchRecipes();
    }, []);

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
                {recipes.slice(0,8).map(function (data, index) {
                    if (index < 8) {
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
