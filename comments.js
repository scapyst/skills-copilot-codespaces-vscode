// Create web server
// Run: node comments.js
// Open browser: http://localhost:3000/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/comments', function(req, res) {
    res.json([{
        "author": "Pete Hunt",
        "text": "This is one comment"
    }, {
        "author": "Jordan Walke",
        "text": "This is *another* comment"
    }]);
});

app.post('/comments', function(req, res) {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});