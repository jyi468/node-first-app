const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

// Nodejs keeps server listening for incoming requests
server.listen(3000);
