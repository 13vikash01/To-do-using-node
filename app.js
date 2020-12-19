const express = require('express');
const bodyParser = require('body-parser');
const methodoveride=require("method-override")
const app=express()

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodoveride("_method"))

app.use(express.static(__dirname + '/public'));

app.set("view engine","ejs");

var   indexRoutes       =   require("./routes/index")

//DATABASE SETUP
const mongoose = require('mongoose');
const { Db } = require('mongodb');
mongoose.connect('mongodb://localhost:27017/todo_v1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));



//BASIC ROUTE 
app.use(indexRoutes);

app.listen(5555,()=>{
      console.log("server running on 5555!")
})