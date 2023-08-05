// var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/dog', (req, res) => {
    res.json({"sound" : "멍멍"})
})

app.get('/cat', (req, res) => {
    res.json({"sound" : "야옹"})
})

// GET param
app.get('/user/:id', (req, res) => {
    const q = req.params
    console.log(q)
    res.json(q)
})
// GET query
app.get('/user2', (req, res) => {
    const q = req.query
    console.log(q)
    res.json(q)
})

// POST
app.use(express.json());
app.post('/user/:id', (req, res) => {
    const p = req.params
    console.log(p)

    const q = req.query
    console.log(q)

    res.send({"message" : "Hello World"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})