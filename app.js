const http = require('http');

// const routes = require('./routes'); // local module, so we need to relative path syntax. don't need '.js'
// const server = http.createServer(routes);

const express = require('express');

const app = express(); // initialize a new express object which is a valid request handler

const server = http.createServer(app);

app.use((req, res, next) => {
    console.log("In the middleware!");
    // next function must be executed so next middleware is run
    next();
}); // executed for every incoming request

app.use((req, res, next) => {
    console.log("In another middleware!");
    // send response if no more middleware
});

// Nodejs keeps server listening for incoming requests
server.listen(3000);
