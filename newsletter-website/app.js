

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
 


app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
   
    
    const data ={
        members: [
            {
                email_address: email,
                status:"subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url ="https://us12.api.mailchimp.com/3.0/lists/bf83a76e84";

    const options = {
        method: "POST",
        auth:"ajay1:857416141ffcde0d06b1cacd598247b9-us12"
    }

    const request = https.request(url, options, function(response){

        if (response.statusCode===200){
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }

        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();

})


app.post("/failure",function(req,res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000,function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})


// API Key
// 857416141ffcde0d06b1cacd598247b9-us12

// List Id
// bf83a76e84.