const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000,function(){
  console.log("Ok");
});
app.use(bodyParser.urlencoded({extended:true}));
                        
                        
app.get('/',function(req,res){
    res.sendFile(
        __dirname + '/index.html'
    );
});
app.post('/', function(req,res){
       var a = req.body.email;
        res.send(`${a}`);
});
