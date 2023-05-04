import React from "react";
// import Axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import icon from "../../icon.png";
import toast, { Toaster } from 'react-hot-toast';

function Login(props) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(data)
  }

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    console.log(data);
    let result = await fetch(
      'http://localhost:5100/login', {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    console.log(result);
    if (result.status === 1) {
      navigate('/highlights', { state: result });
    } else {
      toast("Invalid email/password", {
        duration: 2000,
        position: 'top-center',
        icon: '❌',
      });
      setData({
        email: "",
        password: ""
      })
    }



  }

  return (
    <div>
      <Toaster />
      <nav class='navbar'>
        <ul>
          <li class='actived'>
            <Link to="/">Home</Link>
          </li>
          <li >
            <Link to="/register">Register</Link>
          </li>
          <li class='active'>
            <Link to="/login">Login</Link>
          </li>
          <li >
            <Link to="/about">About</Link>
          </li>
        </ul>

      </nav>
      <section class="vh-100" >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-12">
              <div class="card" >
                <div class="row g-0">
                  <div class="col-md-12 col-lg-12 d-flex align-items-center">
                    <div class="card-body p-12 p-lg-5 text-black">

                      <form onSubmit={(e) => { handleSubmit(e) }}>

                        <div class="d-flex align-items-center mb-3 pb-1">
                          <img src={icon} style={{ height: 30, width: 60, }} alt="" />
                        </div>

                        <h5 class="fw-normal mb-3 pb-3" >Sign into your account</h5>


                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example17">Email address</label>
                          <input class="form-control form-control-lg" type="email" id="email" value={data.email} required onChange={(e) => { handleChange(e) }} /><br />

                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example27">Password</label>
                          <input class="form-control form-control-lg" type="password" id="password" value={data.password} required onChange={(e) => { handleChange(e) }} /><br />


                        </div>


                        <div class="pt-1 mb-4">
                          {/* <input type="submit" value="Submit" /> */}
                          <button class="btn btn-dark btn-lg btn-block" type="submit" value="Submit">Login</button>
                        </div>

                        <p class="mb-5 pb-lg-2" >Don't have an account? <Link to="/register"
                        >Register here</Link></p>
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

export default Login;