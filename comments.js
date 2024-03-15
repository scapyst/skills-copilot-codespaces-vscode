// create web server
// create web server
const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.json());

// data
const comments = [
  { id: 1, author: 'user1', content: 'content1' },
  { id: 2, author: 'user2', content: 'content2' },
  { id: 3, author: 'user3', content: 'content3' },
];

// routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = {   
        id: comments.length + 1,
    }; // Add a closing curly brace here
git add comments.js