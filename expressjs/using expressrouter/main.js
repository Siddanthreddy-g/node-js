const http = require('http');
const express = require('express');
const bodyParser =require('body-parser');
const app =express();

const adminRoutes = require('./routes/adminside');
const shopRoutes = require('./routes/shopside');

app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req,res,next) => {
res.status(404).send('<h1> PAGE NOT FOUND </h1>');
});

const server = http.createServer(app);
server.listen(3000);
