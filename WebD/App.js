var express = require("express");
var app = express();
var ejs = require("ejs");

app.use(express.static('public'));

app.set('views','./views');
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/manual",function(req,res){
    res.render("manual");
});

app.get("/about",function(req,res){
    res.render("AboutUs");
});

app.get("/vehicledetection",function(req,res){
    res.render("VehicleDetection");
});

app.listen(3000,function(req,res){
    console.log("Project is Running");
});