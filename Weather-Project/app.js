const express = require("express");
const app = express();
const bodyParser = require("body-parser");


const https = require("https"); 
const { request } = require("http");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");

    });


app.post("/",function(req,res){
    const query= req.body.cityName;
    const unit = "metric";
    const apikey = "56c6c87d16b6a26b0d29be594788c799"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apikey +"&units="+unit;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description;
            const icon = "https://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
            let output ="The temperature in "+ query + " is "+temp +" degree Celsius and it is like "+description+".<img src="+icon+">"; 
            res.send(output);
        });
    });
});
    



app.listen(3500, function(){

    console.log("Server running in 3000");
});