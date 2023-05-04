import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function FavRecipes({ route, navigation }) {
    const { state } = useLocation();

    const [recipes, setRecipes] = useState([]);

    const getFavRecipes = async (title) => {
        let response = await fetch(
            `http://localhost:5100/savedrecipes?name=${state.name}`
        )
        const data1 = await response.json();
        let d = [];
        let b = [];
        for (let i in data1) {
            if (data1[i].idMeal != null && !b.includes(data1[i].idMeal)) {
                d.push(data1[i]);
                b.push(data1[i].idMeal);
            }
        }
        setRecipes(d);
        console.log(d.length);
        // console.log(d == []);
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
            let result = await fetch(
                'http://localhost:5100/shoplist', {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(result);
        }

    }

    useEffect(() => {
        getFavRecipes();
        saveToShop();
        document.title = 'Fav Recipes';
    }, []);



    return (
        <div class="dashboard">
            <Toaster />
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


            {
                recipes.length !== 0
                    ? (
                        <div class="container">
                            {recipes.slice(0, 40).map(function (data, index) {
                                if (index < 40) {
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
                                                <div class="row mt-auto">
                                                    <button id="btnSearch" class="btn btn-outline-primary btn-md" Style="width: 150px;"
                                                        onClick={() => { saveToShop(index) }} >Add to list</button>
                                                    <button id="btnClear" class="btn btn-md" Style="width: 60px;"><FontAwesomeIcon icon={faHeart} size="lg" style={{ color: "#d91261", }} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return (null);
                            })}
                        </div>
                    ) : (
                        <div class="main">
                            <h2 >No Favorite recipes saved...</h2>
                            <h2 >Go Add some!</h2>
                        </div>
                    )
            }
        </div >
    )
}

export default FavRecipes;
