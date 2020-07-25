const http = require('http');
const {request} = require('https');

http.createServer((requset, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on('end', () => {
        // body = Buffer.concat(body).toString();
        console.log('body:', body);
        res.setHeader('Content-Type', 'text/html');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("<h1>adsfasdfasd</h1>");
    });
}).listen(8088)

console.log('server started')