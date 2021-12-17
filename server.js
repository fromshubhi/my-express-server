const express = require("express");

const app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello</h1>");
})

app.get("/contact", function(req, res){
    res.send("<p>Contact Me : Shubh@abc.com </p>");
})

app.get("/about", function(req, res){
    res.send("<p>About Me : Hello I'm Shubhangi</p>")
})
app.listen(3000, function(){
    console.log("server started on port 3000");
} );


