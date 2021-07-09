const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><titleEnter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="datadata"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();  // have to return so that we can't call res.write anymore
    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        //res.writeHead(); // write meta information like status code and header
        res.statusCode = 302;
        res.setHeader('Location', '/'); // redirect user back to initial form
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from node.js server</h1></body>');
    res.write('</html>');
    res.end(); // Send back to client, can't write anymore, should throw error
});

// Nodejs keeps server listening for incoming requests
server.listen(3000);
