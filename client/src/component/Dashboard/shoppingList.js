import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ShoppingList({ route, navigation }) {
    const { state } = useLocation();

    const [recipes, setRecipes] = useState([]);
    const [Ingredient, setIngredient] = useState([]);

    const getFavRecipes = async (title) => {
        let response = await fetch(
            `http://localhost:5100/shoplist?name=${state.name}`
        )
        const data1 = await response.json();
        let d = [];
        let g = [];
        for (let i in data1) {
            if (data1[i].idMeal != null) {
                d.push(data1[i]);
                for (let j = 1; j < 21; j++) {

                    if (data1[i]['strIngredient' + j.toString()] != null) {
                        let Ingre = data1[i]['strIngredient' + j.toString()];
                        if (!g.includes(Ingre)) {
                            g.push(Ingre);
                        }
                    }
                }
            }
        }
        setRecipes(d);
        setIngredient(g);
    }

    useEffect(() => {
        getFavRecipes();
    }, []);


    return (
        <div class="dashboard">
            <nav class="navbar inverse">
                <ul>
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li >
                        <Link to="/login">Logout</Link>
                    </li>
                    <li >
                        <Link to="/about">About Us</Link>
                    </li>
                </ul>
            </nav>


            <div class="sidenav">
                <Link to="/highlights" state={state}>User: {state.name}</Link>
                <Link to="/highlights" state={state}>Highlights</Link>
                <Link to="/recipes" state={state}>Search</Link>
                <Link to="/favrecipes" state={state}>Favorite Recipes</Link>
                <Link to="/shoppinglist" state={state}>Shopping List</Link>
            </div>


            <div class="container text-center ">
                <div class="col-md-6 text-center">
                    <h4>Dishes</h4>
                    <div class="row ">
                        {recipes.map(function (data, index) {
                            return (
                                <div class="card  item" style={{ width: 220 }}>
                                    <img src={data.strMealThumb} alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.strMeal}</h5>
                                        <p class='card-text'>
                                            {data.strArea}<br />
                                            Ingredient: {data.strCategory}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4">
                    <h4>Ingredients</h4>
                    <div class="d-flex justify-content-between">
                        <div >
                            <p class='ingredient-b in-block' >Ingredient </p>
                        </div>
                        <div >
                            <p class='ingredient-b' >Amount</p>
                        </div>
                    </div>
                    {Ingredient.map(function (data, index) {
                        if (data) {
                            return (
                                <div class="d-flex justify-content-between">
                                    <div >
                                        <p class='ingredient in-block' >{data} </p>
                                    </div>
                                    <div >
                                        <p class='ingredient' >xxx</p>
                                    </div>
                                </div>
                            )
                        }
                        return 0;

                    })}
                </div>
            </div>
        </div>

    );
}

export default ShoppingList;