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
    
        res.send(res.body);
});
