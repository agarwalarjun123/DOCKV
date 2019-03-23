const router = require('express').Router();
const {setConnection} = require('../helpers/ssh');
router.post('/',(req,res,next)=>{
    
    setConnection()
    .then(e=>res.send(e))
    .catch(err=>next(new Error(err)))
})


module.exports= router;
