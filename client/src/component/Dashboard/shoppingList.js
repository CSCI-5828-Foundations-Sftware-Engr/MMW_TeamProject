import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ShoppingList( {route, navigation} ) {
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


            <div class="container text-center">
                <div class="row">
                    <div class="col ">
                        <h4>Recipes</h4>
                        recipe1 <br />
                        recipe2 <br />
                        recipe3 <br />
                        recipe4
                    </div>
                    <div class="col">
                        <h4>Ingredients</h4>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ShoppingList;