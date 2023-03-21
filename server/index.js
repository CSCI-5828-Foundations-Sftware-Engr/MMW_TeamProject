const express = require('express');
const bodyParser = require('body-parser')

var cors = require('cors');
const app = express();

var jsonParser = bodyParser.json()
app.use(cors());
const port = 8001;

app.get('/', (req, res) => {
    res.send('Hello World!!!!');
})

app.post("/register", jsonParser, (req, res) => {
    // console.log(res)
    console.log('Hit')
    res.json({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})