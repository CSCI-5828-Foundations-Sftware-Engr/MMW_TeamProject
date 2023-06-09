import React from "react";
import PostForm from './component/Register/PostForm'
import Submitted from './component/Register/Submitted'
import Login from './component/Register/login'
import Home from './component/Homepage/home'
import About from './component/Homepage/about'
import Dashboard from './component/Dashboard/dashboard'
import Recipes from './component/Dashboard/recipes'
import ShoppingList from "./component/Dashboard/shoppingList";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Highlights from "./component/Dashboard/highlights";
import FavRecipes from "./component/Dashboard/favRecipes";



function App() {


  return (
    <div style={{}}>
      <Router>


        <Routes>
          <Route path="/register" element={<PostForm />} />

          <Route path="/login" element={<Login />} />

          <Route path="/about" element={<About />} />

          <Route path="/" element={<Home />} />

          <Route path="/submitted" element={<Submitted />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/recipes" element={<Recipes />} />

          <Route path="/shoppinglist" element={<ShoppingList />} />

          <Route path="/highlights" element={<Highlights />} />

          <Route path="/favrecipes" element={<FavRecipes />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
