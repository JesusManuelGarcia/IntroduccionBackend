const http = requiere("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res)=>{
res.statuscode=200;
res.setheader("content-type", "text/plain");
res.end("Hola Mundo\n");
});

server.listen(port, hostname, ()=>{
console.log("el servidor se esta ejecutando en http:")
});