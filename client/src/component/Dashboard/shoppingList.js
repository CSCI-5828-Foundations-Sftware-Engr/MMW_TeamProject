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
        let b = [];
        let g = [];
        for (let i in data1) {
            if (data1[i].idMeal != null && !b.includes(data1[i].idMeal)) {
                d.push(data1[i]);
                b.push(data1[i].idMeal);
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
        document.title = 'Shop List';
    }, []);


    return (
        <div class="dashboard">
            <nav class="navbar inverse">
                <ul>
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li >
                        <Link to="/">Logout</Link>
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


            <div class="container ">
                <div class="col-md-6">
                    <h4 style={{ textAlign: "center" }}>Dishes</h4>
                    <div class="row ">
                        {recipes.map(function (data, index) {
                            return (
                                <div class="card item" style={{ width: 220 }}>
                                    <img src={data.strMealThumb} alt="" />
                                    <div class="card-body  d-flex flex-column">
                                        <h5 class="card-title">{data.strMeal}</h5>
                                        <p class='card-text'>
                                            {data.strArea}<br />
                                            <p style={{ fontSize: 13, fontWeight: 600, paddingBottom: 0, paddingTop: 15, marginBottom: 0 }}>Ingredients:</p>
                                            <p style={{ fontSize: 13, paddingBottom: 0, paddingTop: 0, marginBottom: 0 }}>&nbsp;  {data.strIngredient1}: {data.strMeasure1}</p>
                                            <p style={{ fontSize: 13, paddingBottom: 0, paddingTop: 0, marginBottom: 0 }}>&nbsp;  {data.strIngredient2}: {data.strMeasure2}</p>
                                            <p style={{ fontSize: 13, paddingBottom: 0, paddingTop: 0, marginBottom: 0, textAlign: "center" }}>...</p>
                                        </p>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4">
                    <h4 style={{ textAlign: "center" }}>Ingredients</h4>
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
                        return (null);

                    })}
                </div>
            </div>
        </div>

    );
}

export default ShoppingList;