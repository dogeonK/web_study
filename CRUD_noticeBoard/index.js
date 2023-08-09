var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/create', function (req, res) {
    console.log(req.query);
    res.send('GET success');
});

app.post('/createpost', function (req, res) {
    console.log(req.body);
    res.send('POST success');
});

app.listen(8080);
console.log('Server is listening on port 8080');