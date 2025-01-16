const http = require('http');
const express = require('express');
const app = express();
app.use('/add-product',(req,res,next) => {
   console.log('in the middleware');
   res.send('add product');
}); 
   //next();
//next();used for mulitiple app.use so as we get the next part of the code

app.use('/',(req,res,next) => {
    console.log('In the another middleware');
res.send('<h1>Hello from Express');
}); 
const server = http.createServer(app);
server.listen(3000);
