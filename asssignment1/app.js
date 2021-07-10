const http = require('http');

const server = http.createServer((req, res) => {
    const {url, method} = req;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Greetings!</title></head>');
        res.write('<body><h1>Hello!</h1><form action="/create-user" method="POST"><input type="text" name="userdata"><button type="submit">Create User</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302; // Need status code for successful response!
            res.setHeader('Location', '/'); // redirect user back to home page
            return res.end();
        });
    }

})

server.listen(3000);
