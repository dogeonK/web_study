var express = require('express');
var app = express();

// let comments = [];
// DB 설정
const { Sequelize, DataTypes } = require('sequelize');
// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const Comments = sequelize.define('Comments', {
    // Model attributes are defined here
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
});

(async () => {
await Comments.sync({});
console.log("The table for the Comments model was just (re)created!");
})();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', async function (req, res) {
    const comments = await Comments.findAll({});
    res.render('index', {comments : comments});
});

app.get('/create', function (req, res) {
    console.log(req.query);
    res.send('GET success');
});

app.post('/createpost', async function (req, res) {
    console.log(req.body);

    const { post_content } = req.body;

    // comments.push(post_content);
    const comment = await Comments.create({ content: post_content });

    // console.log(comments);

    res.redirect('/');
});

app.listen(8080);
console.log('Server is listening on port 8080');