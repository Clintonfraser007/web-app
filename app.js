const express = require("express");
const bodyParser = require("body-parser");

const ejs = require("ejs");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("home",{ptitle: "home"});
});
app.get("/contact",function(req,res){
  res.render("contact",{ptitle:"contact"})
})


app.listen(3000,function(){
  console.log("server has started at port 3000.");
});
