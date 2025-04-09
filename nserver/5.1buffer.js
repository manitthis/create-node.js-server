// collecting chunks in buffer & parsing 

const http=require('http');
const fs=require('fs');

function requestlistener(req, res){
    console.log(req.url, req.method);
    if (req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Website</title><head>');
    res.write('<body><h1>enter your details</h1>');
    res.write('<form action ="/submit" method="POST">');
    res.write('<input type="text" name="username" placeholder="enter your name" />');
    res.write('<lable for ="male">Male</lable>')
    res.write('<input type="radio" id ="male" name="gender" value="male" />')
    res.write('<lable for ="female">Female</lable>')
    res.write('<input type="radio" id ="female" name="gender" value="female" />')
    res.write('<input type="submit" value="submit" />');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();}
    else if(req.url.toLowerCase()==='/submit'&& req.method=="POST"){
            const body=[];

            req.on('data',chunk=>{
                console.log(chunk);
                body.push(chunk);
            })
            req.on('end',()=>{
               const fullbody= Buffer.concat(body).toString();
               console.log(fullbody);
               const param=new URLSearchParams(fullbody);
               const bodyobject=Object.fromEntries(param);
               console.log(bodyobject);
               fs.writeFileSync('user.txt',JSON.stringify(bodyobject));

            })
            res.statusCode=302;
            res.setHeader("Location","/");
            return res.end();
    }

}
const server =http.createServer(requestlistener);

server.listen(3000);