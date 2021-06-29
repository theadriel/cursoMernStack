const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose  = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./src/routes");

mongoose.connect("mongodb://localhost:27017/curso-basico-mern",{
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useFindAndModify: false
}, function(err){
    if(err) {
        console.log(err)
    } else {
        console.log("Mongo conectado com sucesso!");
    };
});

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.get("/home", (req,res) => {
    res.json({message:"Hello world"});
});

app.use(routes);

app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})