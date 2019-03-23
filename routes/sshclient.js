const router = require('express').Router();
const {setConnection} = require('../helpers/ssh');
const fs =require('fs')
router.post('/',(req,res,next)=>{
    
    setConnection({
        name:req.body.name,
        ip:req.body.ip,
        password:req.body.password
    })
    .then(e=>res.send(e))
    .catch(err=>next(new Error(err)))
})


module.exports= router;
