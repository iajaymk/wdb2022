const express = require("express");
const app = express();


app.get("/",function(request, response){
    response.send("HEllo");
});

app.get("/about",function(req, res){
    res.send("This website is owned by Ajay.He loves to code and create beautiful websites.");
})

app.listen(3500,function(){
    console.log("Server started in port 3500");
});