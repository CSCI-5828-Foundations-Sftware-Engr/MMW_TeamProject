const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var jsonParser = bodyParser.json()
// serve up production assets
app.use(express.static('client/build'));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.post("/register", jsonParser, (req, res) => {
    // console.log(res)
    console.log('Hit')
    res.json({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    })

})
// if not in production use the port 5000
const PORT = process.env.PORT || 5100;
console.log('server started on port:', PORT);
app.listen(PORT);