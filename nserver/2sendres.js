//sending response to the client by server and routing to diff res accoding to url

const http=require('http');

function requestlistener(req, res){
    console.log(req.url, req.method, req.headers);

    if (req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Website</title><head>');
        res.write('<body><h1>Welcome to the website</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/profile'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Website</title><head>');
        res.write('<body><h1>Manit Devra</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Website</title><head>');
    res.write('<body><h1>shi route ni ha url m</h1></body>');
    res.write('</html>');
    res.end();
}
const server =http.createServer(requestlistener);

server.listen(3000);