import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


function FavRecipes({ route, navigation }) {
    const { state } = useLocation();

    const [recipes, setRecipes] = useState([]);

    const getFavRecipes = async (title) => {
        let response = await fetch(
            `http://localhost:5100/savedrecipes?name=${state.name}`
        )
        const data1 = await response.json();
        let d = [];
        for (let i in data1) {
            if (data1[i].idMeal != null) {
                d.push(data1[i]);
            }
        }
        setRecipes(d);
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
        getFavRecipes();
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



            {
                recipes != null
                    ? (
                        <div class="container">
                            {recipes.slice(0, 40).map(function (data, index) {
                                if (index < 40) {
                                    return (
                                        <div class="card item" style={{ width: 220 }}>
                                            <img src={data.strMealThumb} alt="" />
                                            <div class="card-body">
                                                <h5 class="card-title">{data.strMeal}</h5>
                                                <p class='card-text'>
                                                    {data.strArea}<br />
                                                    Ingredient: {data.strCategory}
                                                </p>
                                                <button id="btnSearch" class="btn btn-primary btn-md center-block" Style="width: 105px;"
                                                    onClick={() => { saveToShop(index) }} >Add to list</button>
                                                {/* <i class="bi bi-bookmark-heart-fill float-end"></i> */}
                                            </div>
                                        </div>
                                    )
                                }
                                return 0;
                            })}
                        </div>
                    ) : (
                        <div>
                            <h2 class="main">No recipe found</h2>
                        </div>
                    )
            }
        </div >
    )
}

export default FavRecipes;
