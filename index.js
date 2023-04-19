const express = require('express');
const bodyParser = require('body-parser')
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
    
// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

app.use(express.json());
app.use(cors());
// serve up production assets
const path = require('path');

app.get("/", (req, resp) => {
    resp.send("App is Working");

});

app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
  
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
// if not in production use the port 5000
const PORT = process.env.PORT || 5100;
console.log('server started on port:', PORT);
app.listen(PORT);