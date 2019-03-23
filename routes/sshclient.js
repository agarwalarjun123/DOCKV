const router = require('express').Router();
const {setConnection} = require('../helpers/ssh');
const fs =require('fs')
router.post('/',(req,res,next)=>{
    
    setConnection({
        name:"root",
        ip:"68.183.90.232",
        password:"Arjun@1234"
    })
    .then(e=>res.send(e))
    .catch(err=>next(new Error(err)))
})


module.exports= router;
