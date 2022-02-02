const express = require("express");
const app = express();
const mustache = require('mustache-express');
const mysql = require("mysql");
const session = require("express-session");
const basicAuth = require("express-basic-auth");
const cookieParser = require("cookie-parser");

require("dotenv").config({
    path: "./process.env"
});

//mysql connection
var con = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME

})

app.engine('html', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views'); // template dirs

app.use(express.static(__dirname));
//json decoder 
app.use(express.json());

app.use(cookieParser());
//set csrf protection 
//change when live 
app.use(session({
    secret: "maine_merg",
    saveUninitialized: true,
    resave: false
}))


//paths

app.get("/",(req,res)=>{
    res.render("index.html");
})

app.get("/index",(req,res)=>{
    res.render("index.html");
})

app.listen(5000,function(){
    console.log("Listening on 5000")
})