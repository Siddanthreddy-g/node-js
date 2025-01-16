const http=require('http');
const server=http.createServer((req,res) =>{
    console.log(req);
    //process.exit();
});
server.listen(990);
//999 is a file name
//this creates a server and would be running in a loop as we did not add any html page or some user input page to it
//if we use process.exit after console.log then it would exit
