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

app.get("/savedrecipes", async (req, resp) => {
    const name = req.query.name;
    let user = await User.findOne({ name });
    let recipes = user.recipes;
    resp.send(JSON.stringify(recipes));

});

app.get("/shoplist", async (req, resp) => {
    const name = req.query.name;
    let user = await User.findOne({ name });
    let recipes = user.shoprecipes;
    resp.send(JSON.stringify(recipes));

});

app.post("/shoplist", async (req, resp) => {
    const { name } = req.body;
    let result = 0;
    let user = await User.findOne({ name });
    let flag = false;
    for (let i in user.shoprecipes) {
        if (user.shoprecipes[i].idMeal == req.body.idMeal) {
            flag = true;
        }
    }
    if (!flag && req.body.idMeal != null) {
        user.shoprecipes.push(req.body);
        result = 1;
        console.log('saved')
    } else {
        result = 2;
    }
    await user.save();
});


app.post("/savedrecipes", async (req, resp) => {
    const { name } = req.body;
    let result = 0;
    let user = await User.findOne({ name });
    let flag = false;
    for (let i in user.recipes) {
        if (user.recipes[i].idMeal == req.body.idMeal) {
            flag = true;
        }
    }
    if (!flag && req.body.idMeal != null) {
        user.recipes.push(req.body);
        result = 1;
        console.log('d', req.body.name)
    } else {
        result = 2;
        console.log('e', req.body.name)
    }
    await user.save();

});

app.post("/register", async (req, resp) => {
    const { password, name, email } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        name,
        password: hash,
        email,
        recipes: [],
        shoprecipes: []
    });
    await user.save();
    resp.send({
        name,
        password: hash,
        email,
    });
});


app.post("/login", async (req, resp) => {
    const { password, email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
        resp.send({ status: 2 });
        console.log('got it2');
    } else {
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
            let data = JSON.parse(JSON.stringify(user));
            data.status = 1;
            console.log(data);
            resp.send(data);
            console.log('got it1');
        }
        else {
            resp.send({ status: 2 });
            console.log('got it2');
        }
    }

});

// if not in production use the port 5000
const PORT = process.env.PORT || 5100;
console.log('server started on port:', PORT);
app.listen(PORT);