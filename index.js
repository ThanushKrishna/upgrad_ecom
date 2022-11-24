const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/user.model");
const routes = require("./routes/index.routes")

app.use(express.json());

app.listen(8080, ()=> {
    console.log("Application started");
});

mongoose.connect("mongodb://0.0.0.0:27017/Ushop")
.then(()=>{
    console.log("DataBase connected")
})
.catch((err)=>console.log(err))

app.use('/eshop', routes)

app.all('*', (req, res)=>{
    return res.status(404).send("invalid url")
})