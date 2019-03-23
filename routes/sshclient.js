const router = require('express').Router();
const {setConnection} = require('../helpers/ssh');

router.post('/',(req,res,next)=>{
    
    setConnection({
        name:"root",
        ip:"68.183.90.232"
    })
    .then(e=>res.send(e))
    .catch(err=>next(new Error(err)))
})


module.exports= router;
