// const http = require('http');

// const routes = require('./routes'); // local module, so we need to relative path syntax. don't need '.js'
// const server = http.createServer(routes);

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // initialize a new express object which is a valid request handler

// Order of middlewares is important because '/' path match handles every combination
app.use(bodyParser.urlencoded({extended: false}));  // parses body and calls next afterward. Parses body for things like form data

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log("In another middleware!");
    res.send('<h1>Hello from express!</h1>');
});

// const server = http.createServer(app);
//
// // Nodejs keeps server listening for incoming requests
// server.listen(3000);

app.listen(3000);
