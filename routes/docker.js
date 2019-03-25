const router = require('express').Router()
const {spawn} = require('child_process')
const {docker_logs,running_containers,docker_systeminfo} = require('../helpers/util')

router.post('/docker_logs',(req,res,next)=>{
    docker_logs(req.body.docker_id)
    .then((l)=>{logs:l})
    .catch((err)=>next(new Error(err)))
})

router.get('/containers',(req,res,next)=>{
    running_containers()
    .then((e)=>res.send({r:e}))
    .catch(err => next(new Error(err)))
})

router.get('/system_dockerinfo',(req,res,next)=>{
    docker_systeminfo()
    .then(e=>res.send({r:e}))
    .catch(err => next(new Error(err)))
})

router.get('/dockerinfo',(req,res,next)=>{
    
    let child = spawn('sudo',['docker','stats',`d6d`])
    child.stdout.pipe(res)
    child.stderr.on('data',(data)=>{
        console.log(data.toString())
    })    
})
module.exports = router;
