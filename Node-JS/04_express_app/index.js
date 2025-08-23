// const http = require('http');
const express = require('express');

const app = express();
// const myServer = http.createServer(app);

// Route: GET /
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

// Route: GET /about
app.get('/about', (req, res) => {
    res.send('This is About Page');
});

// Route: POST /api
app.post('/api', (req, res) => {
    res.send('Data received through POST');
});

app.listen(8000, () => console.log("Server Started!"));

// Server listen
// myServer.listen(8000, () => {
//     console.log("Server Started!");
// });