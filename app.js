const http = require('http');

const routes = require('./routes'); // local module, so we need to relative path syntax. don't need '.js'

const server = http.createServer(routes);

// Nodejs keeps server listening for incoming requests
server.listen(3000);
