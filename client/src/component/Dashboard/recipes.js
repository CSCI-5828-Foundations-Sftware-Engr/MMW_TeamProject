import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import myData from './train.json';
import food1 from "../../food1.jpg";
import food2 from "../../food2.jpg";
import food3 from "../../food3.jpg";
import food4 from "../../food4.jpg";

function Recipes({ route, navigation }) {
    const { state } = useLocation();
    console.log(myData[0]);
    let food = [food1, food2, food3, food4];
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
                <Link to="/recipes" state={state}>Recipes</Link>
                <Link to="/recipes" state={state}>Loved recipes</Link>
                <Link to="/userinfo" state={state}>Shoplist</Link>
            </div>

            <div class='container'>
                {myData.slice(0, 9).map(function (data, index) {
                    if (index < 9) {
                        return (
                            <div class="card item" style={{ width: 180 }}>
                                <img src={food[index % 4]} alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Dish id:{data.id}</h5>
                                    <h4 class="card-title">{data.cuisine}</h4>
                                    {data.ingredients.map(function (d, i) {
                                        if (i < 6) {
                                            return (<p class='ingredient'>{d}</p>);
                                        } else if (i === 7) {
                                            return (<p class='ingredient'>...</p>);
                                        }
                                        return 0;
                                    })
                                    }
                                    <a href="/" class="btn btn-primary">Add to favorite</a>
                                </div>
                            </div>
                        );
                    }
                    return 0;
                })
                }
            </div>
        </div >

    );


}

export default Recipes;