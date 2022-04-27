const http = require('http');
const hostname = '192.168.50.176';
const port = 3000;
const server = http.createServer((req, res)=>{
res.statusCode=200;
res.setHeader('Content-Type', 'text/html');
res.end('Hola Mundo\n');
});
server.listen(port, hostname,function () {
        console.log('el servidor se esta ejecutando en http://192.168.50.176:3000/');
    });