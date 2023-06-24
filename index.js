const express = require("express");
const request = require("request");
const app = express();

app.listen(3000,function(){
  console.log("Ok");
});
                        
                        
app.get('/',function(req,res){
    res.sendFile(
        __dirname + '/index.html'
    );
});
app.post('/', function(req,res){
  res.write("<h1> "+ res.body.email +"</h1>");
    res.send("<h1> Thanks for posting </h1>");
});
