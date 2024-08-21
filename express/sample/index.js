const http = require('http');
const fs = require('fs');
const dir = './public';
const port = process.env.PORT | 3000;


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        render(res, 'index.html');
    }
    else if (req.url === '/about') {
        render(res, 'about.html');
    }
    else if (req.url === '/contact') {
        render(res, 'contact.html');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Page Not Found!</h1>');
    }

}).listen(port, () => { console.log(`Server is running on port http://localhost:${port}`) });


const render = (res, file) => {
    fs.readFile(dir + '/' + file, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Page Not Found!</h1>');
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}