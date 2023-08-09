var express = require('express');
var app = express();

let comments = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    res.render('index', {comments : comments});
});

app.get('/create', function (req, res) {
    console.log(req.query);
    res.send('GET success');
});

app.post('/createpost', function (req, res) {
    console.log(req.body);

    const { post_content } = req.body;

    comments.push(post_content);

    console.log(comments);

    res.redirect('/');
});

app.listen(8080);
console.log('Server is listening on port 8080');