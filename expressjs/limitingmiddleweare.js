const http = require('http');
const express = require('express');
const bodyParser =require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next) => {
   
   res.send('<form action="/product" method ="POST"><input type ="text" name="title"> <button type="submit"> Add product </button></form>');
}); 
   //next();
//next();used for mulitiple app.use so as we get the next part of the code
app.post('/product',(req,res,next) => {   //we used .post here we can use .get also insted of .use
    console.log(req.body);
    res.redirect('/');


});


app.use('/',(req,res,next) => {
    
res.send('<h1>Hello from Express');
}); 
const server = http.createServer(app);
server.listen(3000);
