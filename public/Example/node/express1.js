const express = require("express");

const app = express();

app.use("/", function(req, res) {
    res.send("Hello World");
    console.log(req);
});

app.use("/contact", function(req, res) {
    res.send("email: myemail@email.com");
});

app.listen(3000, function(req, res){
    console.log("listening to port 3000.");
});