import React from "react";
import PostForm from './component/PostForm'
import Submitted from './component/Submitted'
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';



function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PostForm />} />
          <Route path="/submitted" element={<Submitted />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
