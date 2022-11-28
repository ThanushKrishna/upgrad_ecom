const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/user.model");
const routes = require("./routes/index.routes")
const server = require("./config/server.config")
const database = require("./config/db.confiig")

app.use(express.json());

app.listen(server.PORT, ()=> {
    console.log(`Application started at ${server.PORT}`);
});

mongoose.connect(database.link)
.then(()=>{
    console.log("DataBase connected")
})
.catch((err)=>console.log(err))

app.use('/eshop', routes)

app.all('*', (req, res)=>{
    return res.status(404).send("invalid url")
})