import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Dashboard({ route, navigation }) {
    const { state } = useLocation();
    if (state.status === 1) {
        return (
            <div class='dashboard'>
                <nav class='navbar inverse'>
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

                <div class="main">

                    <h2>Dashboard</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque
                        ratione amet. Earum dolores, qui, hic provident atque natus cumque
                        laboriosam quam nesciunt illo ut dolorem eos eligendi ullam
                        consequuntur?  </p>
                </div>
            </div>

        );
    }
    else {
        return (
            <Navigate to="/login" />
        );
    }


}

export default Dashboard;