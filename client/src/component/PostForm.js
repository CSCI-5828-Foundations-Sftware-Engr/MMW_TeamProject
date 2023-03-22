import React from "react";
import Axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PostForm(props) {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(data);
        Axios.post('http://localhost:8001/register', data)
            .then((result) => {
                console.log(result)
            })
        navigate('/submitted', { state: data });

    }

    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                {/*when user submit the form , handleSubmit()
      function will be called .*/}
                <h2> Team Meow Meow Woof</h2>
                <h3> project init</h3>

                <label >
                    Name:
                </label>
                <br />
                <input type="text" id="name" value={data.name} required onChange={(e) => { handleChange(e) }} /><br />

                <label >
                    Age:
                </label>
                <br />
                <input type="text" id="age" value={data.age} required onChange={(e) => { handleChange(e) }} /><br />

                <label>
                    Email:
                </label>
                <br />
                <input type="email" id="email" value={data.email} required onChange={(e) => { handleChange(e) }} /><br />


                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default PostForm;