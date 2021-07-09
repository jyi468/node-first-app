const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
});

// Nodejs keeps server listening for incoming requests
server.listen(3000);
