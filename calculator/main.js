const http=require('http');
function reqlistener(req,res){
    res.setHeader('Content-Type','text/html');
    if (req.url==='/'){
        res.write('<html>');
        res.write('<head><title>calculator</title><head>');
        res.write('<body><h1>Ready to calculate??</h1>');
        res.write('<a href="/letsgo" >letsgo</a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();}
    else if(req.url==='/letsgo'){
    res.write('<html>');
    res.write('<head><title>calculator</title><head>');
    res.write('<body><h1>Ready to calculate??</h1>');
    res.write('<body><h2>enter numbers you want to add</h2>');
    res.write('<form action ="/result" method="POST">');
    res.write('<input type="text" name="fnummber" placeholder="enter first number" />');
    res.write('<input type="text" name="snummber" placeholder="enter second number" />');
    res.write('<input type="submit" value="submit" />');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();}
    else if(req.url==='/result'&& req.method=="POST"){
        const body=[];
        req.on('data',chunk=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const fullbody= Buffer.concat(body).toString();
            console.log(fullbody);
            const param=new URLSearchParams(fullbody);
            const bodyobject=Object.fromEntries(param);
            const result=Number(bodyobject.fnummber)+Number(bodyobject.snummber);
            console.log(result);
            res.write('<html>');
        res.write('<head><title>calculator</title><head>');
        res.write(`<body><h1>Here is the sum!!${result}</h1>`);

        res.write('</body>');
        res.write('</html>');
        return res.end();
            })

      
    }
    }
const server =http.createServer(reqlistener);
server.listen(3000);