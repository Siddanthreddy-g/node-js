const http=require('http');
const server=http.createServer((req,res) =>{
    console.log(req.url,req.method,req.headers);
    //process.exit();
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> MY FIRST PAGE</head></title>');
    res.write('<body><h1> hi form node js</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(991);
