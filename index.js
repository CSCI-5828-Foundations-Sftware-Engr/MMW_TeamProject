const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const User = require('./model/user')
const app = express();
const cors = require("cors");

// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'MMW-final-proj',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to MMW-final-proj database'));

User.createIndexes();

app.use(express.json());
app.use(cors());
// serve up production assets
const path = require('path');

app.get("/", (req, resp) => {
    resp.send("App is Working");

});

app.post("/register", async (req, resp) => {
    console.log('got it');
    const {password, name, email} = req.body;
    const hash = await bcrypt.hash(password, 12);
    console.log(hash);
    const user = new User({
        name,
        password: hash,
        email,
    });
    await user.save();
    resp.send({
        name,
        password: hash,
        email,
    });
});


app.post("/login", async (req, resp) => {
    console.log('got it');
    const {password, email} = req.body;
    const user = await User.findOne({email});
    const valid = await bcrypt.compare(password, user.password);
    if(valid){
        resp.send("welcom")
    }
    else{
        resp.send('back')
    }
    
    
});

// if not in production use the port 5000
const PORT = process.env.PORT || 5100;
console.log('server started on port:', PORT);
app.listen(PORT);