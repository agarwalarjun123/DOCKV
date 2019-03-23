const router = require('express').Router()

const {docker_logs,running_containers,docker_systeminfo,docker_container_info} = require('../helpers/util')

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
router.post('/dockerinfo',(req,res,next)=>{
    docker_container_info(req.body.dockerid)
    .then(e => res.send({r:e}))
    .catch(err => next(new Error(err)))
})
module.exports = router;
