import React from "react";
// import Axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function PostForm(props) {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    const handleSubmit = async(e) => {

        e.preventDefault();
        console.log(data);
        let result = await fetch(
            'http://localhost:5100/register', {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        result = await result.json();
        console.log('dsad')
        console.log(result);
        if (result) {
            alert("Data saved succesfully");
            setData({
                name: "",
                email: "",
                password: ""
            });
        }
        navigate('/submitted', { state: result });

    }

    return (
        <div>
            <nav  class = 'navbar'>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li  class = 'active'>
            <Link to="/register">Register</Link>
          </li>
          <li >
            <Link to="/login">Login</Link>
          </li>
          <li >
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

    </nav>


    <section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" >
          <div class="row g-0">
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form  onSubmit={(e) => { handleSubmit(e) }}>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <span class="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" >Register your account</h5>
                  
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example17">Username</label>
                  <input class="form-control form-control-lg" type="text" id="name" value={data.name} required onChange={(e) => { handleChange(e) }} /><br />
            
                  </div>


                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example17">Email address</label>
                  <input class="form-control form-control-lg" type="email" id="email" value={data.email} required onChange={(e) => { handleChange(e) }} /><br />

                  </div>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example27">Password</label>
                  <input class="form-control form-control-lg" type="password" id="password" value={data.password} required onChange={(e) => { handleChange(e) }} /><br />

                    
                  </div>


                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="submit" value="Submit">Login</button>
                  </div>

                  <p class="mb-5 pb-lg-2" >Already have an account? <Link to="/login"
                      >Login here</Link></p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default PostForm;