

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req,res){
    var today = new Date();

    if(today.getDay() === 6|| today.getDay() === )
    res.send("Hello");
});


app.listen(3000,function(){
    console.log("Server running at 3000");
});