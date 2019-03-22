// apidoc -i . -o docs -f *.js

require("dotenv").config();
const express = require("express");
const app = express();
const cors= require('cors');
const io = require('socket.io');
// for verbose logging
app.use(require("morgan")("dev"));

// to handle post request
const bp = require("body-parser");
app.use(bp.json());     
app.use(cors());
app.use(bp.urlencoded({extended:false}));

// connect to mongoDB
app.use('/sshclient',require('./routes/sshclient'))
    
app.use((err,req,res,next)=>{
    console.error(err);
    res.send({err:err.message});
});
const server = app.listen(process.env.PORT || 3000, ()=>console.log("Listening..."));


module.exports=app