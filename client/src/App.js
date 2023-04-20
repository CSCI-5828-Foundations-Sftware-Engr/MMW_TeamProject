import React from "react";
import PostForm from './component/Register/PostForm'
import Submitted from './component/Register/Submitted'
import Login from './component/Register/login'
import Home from './component/Homepage/home'
import About from './component/Homepage/about'
import Dashboard from './component/Dashboard/dashboard'
import Recipes from './component/Dashboard/recipes'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



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

        </Routes>

      </Router>
    </div>
  );
}

export default App;
