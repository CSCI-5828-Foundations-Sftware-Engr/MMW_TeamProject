import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import pasta from "./pasta.json"
import chicken from "./chicken.json"

function Recipes( { route, navigation}) {
    const { state } = useLocation();

    // const address = allmeals.strMealThumb;
    console.log(chicken[1]);

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
                <div class="input-group w-25 ms-auto">
                    <input type="search" class="form-control rounded" placeholder="Search for recipes" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" class="btn btn-outline-primary">search</button>
                </div>
            </nav>


            <div class="sidenav">
                <Link to="/userinfo" state={state}>User: {state.name}</Link>
                <Link to="/recipes" state={state}>Recipes</Link>
                <Link to="/recipes" state={state}>Favorite Recipes</Link>
                <Link to="/shoppinglist" state={state}>Shopping List</Link>
            </div>



            <div class="container">
                {chicken.slice(0,12).map(function (data, index) {
                    if (index < 12) {
                        return (
                            <div class="card item" style={{ width: 220}}>
                                <img src={data.strMealThumb} alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">{data.strMeal}</h5>
                                    <p class='card-text'>
                                    {data.strArea}<br />
                                    Ingredient: {data.strCategory}
                                    </p>
                                    <a href="/" class="btn btn-primary">Add to favorite</a>
                                </div>

                            </div>
                        )
                    }
                })}
            </div>

        </div>
    )

    // // const API_KEY = "1"
    // const API_URL0 = "www.themealdb.com/api/json/v1/1/search.php?";
    // // const API_URL1 = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
    // // const API_URL2 = "www.themealdb.com/api/json/v1/1/search.php?s=pasta";

    // const [meal, setMeals] = useState([]);
    // const [searchTerm, setSearchTerm] = useState([]);

    // const searchMeals = async (title) => {
    //     const response = await fetch(`${API_URL0}s=${title}`);
    //     // const response = await fetch(API_URL1);
    //     const data = await response.json();

    //     // console.log(response);
    //     // console.log(data);
    //     console.log(data.meals);
    //     setMeals(data.meals);
    // }

    // useEffect(() => {
    //     searchMeals("pasta");
    //     console.log("funciton used");
    // }, []);

    // return (<div>
    {/* <input
      placeholder="Search for recipes"
      value={searchTerm}
    //   value="test"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <img
      src={SearchIcon}
      alt="search"
      onClick={() => searchMeals(searchTerm)}
    />
    {
      meal.length > 0
        ? (
          <div>
          <p>Meal found</p>
          </div>
        ) : (
          <div><p>No meal found</p></div>
        )
    }; */}

    {/* <h1>test</h1> */}

}

export default Recipes;
