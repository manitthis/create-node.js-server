//creating and taking simple req with server 

const http=require('http');

function requestlistener(req, res){
    console.log(req.url, req.method, req.headers);
}
const server =http.createServer(requestlistener);

server.listen(3000);