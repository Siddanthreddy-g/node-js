const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const  router = express.Router();

router.get('/',(req,res,next) => {
    
    res.sendFile(path.join(rootDir,'views','shop.html'));
    }); 
    module.exports = router;
//check the 2nd line its added
//res send converted to res sendfile and dir name is global variable of html used for path identification,
// ../ means go one level up in the adress as dir name will point to routes but views is a sister folder we need to up the level
// code changend after a lecture so we just created a util and gave a path for evetything in common 
