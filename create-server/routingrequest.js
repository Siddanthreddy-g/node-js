const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if (url==='/'){
        res.write('<html>');
    res.write('<head><title> my html page </title> </head>');
    res.write('<body><form action="/message"method"POST"><input type="text"name"message"><button type="submit"> SEND </button></form></body>');
    res.write('</html>');
    return res.end();
}
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> my html page </title> </head>');
    res.write('<body><h1>hi from node js</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(992);