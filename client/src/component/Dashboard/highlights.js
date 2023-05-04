import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
// import randomRecipes from './randomRecipes.json';

const API_URL = "https://www.themealdb.com/api/json/v2/9973533/randomselection.php";

function Highlights({ route, navigation }) {
    const { state } = useLocation();

    const [recipes, setRecipes] = useState([]);
    // const [searchTerm, setSearchTerm] = useState([]);

    const searchRecipes = async () => {
        const response = await fetch(`${API_URL}`);
        const data1 = await response.json();
        // console.log(data1);
        // console.log(typeof(data1));
        // console.log(data1.meals);
        // console.log(typeof(data1.meals));
        setRecipes(data1.meals);
        // console.log("clicked");
        // console.log(recipes.length);
    }

    const saveToFav = async (index) => {
        let data = { ...recipes[index] };
        console.log(recipes[index]);
        data.name = state.name;
        if (recipes[index]) {
            toast(recipes[index].strMeal + " saved to favorite recipes", {
                duration: 2000,
                position: 'top-center',
                icon: '🥰',
            });
        }
        let result = await fetch(
            'http://localhost:5100/savedrecipes', {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

    }

    const saveToShop = async (index) => {
        let data = { ...recipes[index] };
        console.log(recipes[index]);
        data.name = state.name;
        if (recipes[index]) {
            toast(recipes[index].strMeal + " saved to Shopping list", {
                duration: 2000,
                position: 'top-center',
                icon: '🛒',
            });
        }
        let result = await fetch(
            'http://localhost:5100/shoplist', {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    useEffect(() => {
        searchRecipes();
        saveToFav();
        saveToShop();
    }, []);

    return (
        <div class="dashboard">
            <Toaster />
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
                <Link to="/favrecipes" state={state}>Favorite Recipes</Link>
                <Link to="/shoppinglist" state={state}>Shopping List</Link>
            </div>

            <div class="container">
                <h2>Highlighted Recipes</h2>
            </div>
            <div class="container">
                {recipes.slice(0, 8).map(function (data, index) {
                    if (index < 8) {
                        return (
                            <div class="card item" style={{ width: 220 }}>
                                <img src={data.strMealThumb} alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">{data.strMeal}</h5>
                                    <p class='card-text'>
                                        {data.strArea}<br />
                                        Ingredient: {data.strCategory}
                                    </p>
                                    <div class="row">
                                        <button id="btnSearch" class="btn btn-primary btn-md center-block" Style="width: 105px;"
                                            onClick={() => { saveToShop(index) }} >Add to list</button>
                                        <button id="btnClear" class="btn btn-danger btn-md center-block"
                                            Style="width: 105px;" onClick={() => { saveToFav(index) }} >Add to Favorite</button>

                                    </div>
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
