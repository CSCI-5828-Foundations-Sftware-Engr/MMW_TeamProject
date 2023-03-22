import React from "react";
import PostForm from './component/PostForm'
import Submitted from './component/Submitted'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



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
