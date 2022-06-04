const express = require("express");
const app = express();

const https = require("https");


app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Kozhikode&appid=56c6c87d16b6a26b0d29be594788c799&units=metric"
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description;
            const icon = "https://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
            let output ="The temperature in Kozhikode is "+temp +" degree Celsius and it is like "+description+".<img src="+icon+">"; 
            res.send(output);
        })
    });
});



app.listen(3000, function(){

    console.log("Server running in 3000");
});