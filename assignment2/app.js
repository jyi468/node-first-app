const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log("at users");
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
    console.log("at home");
    res.send('<h1>home</h1>');
});

app.listen(3000);
