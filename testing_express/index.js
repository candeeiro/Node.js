const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Welcome to my app using Node.js with Express.")
});

app.get("/sobre", function(req,res){
    res.send("This is about page.")
});

app.get("/blog", function(req,res){
    res.send("This is my personal blog.")
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});
