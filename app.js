const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from node.js server</h1></body>');
    res.write('</html>');
    res.end(); // Send back to client, can't write anymore, should throw error
});

// Nodejs keeps server listening for incoming requests
server.listen(3000);
