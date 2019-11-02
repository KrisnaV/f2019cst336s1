
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("views"));
app.get("/home", function(req, res){
  res.render("home.ejs");
});

app.get("/protect", function(req, res){
  res.render("protect.ejs");
});

app.get("/topFam", function(req, res){
  res.render("topFam.ejs");
});

app.get("/antiVirus", function(req, res){
  res.render("antiVirus.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("server is running...");
});
