const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><titleEnter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="datadata"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();  // have to return so that we can't call res.write anymore
    }
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
