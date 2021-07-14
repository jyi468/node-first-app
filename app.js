// const http = require('http');

// const routes = require('./routes'); // local module, so we need to relative path syntax. don't need '.js'
// const server = http.createServer(routes);

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // initialize a new express object which is a valid request handler

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Order of middlewares is important because '/' path match handles every combination
app.use(bodyParser.urlencoded({extended: false}));  // parses body and calls next afterward. Parses body for things like form data

// Routes from admin.js and shop.js
app.use(adminRoutes);
app.use(shopRoutes);

// const server = http.createServer(app);
//
// // Nodejs keeps server listening for incoming requests
// server.listen(3000);

app.listen(3000);
