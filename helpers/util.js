const {exec,spawn} = require('child_process')
const stream = require('stream');
const util = require('util');

const running_containers = ()=>{

    return new Promise((resolve,rejects)=>{
        exec(`sudo docker ps | awk '{print $1}'`,(err,stdout,stderr)=>{
            if(err)
                return reject(new Error(err))
            resolve(stdout.split('\n').slice(1,-1))
        })
    })

}

const docker_systeminfo = ()=>{
    return new Promise((resolve,reject)=>{
        let d={}
        exec(`sudo docker system info`,(err,stdout,stderr)=>{
            if(err)
                return reject(new Error(err))
            let data = stdout.split('\n')

            data = data.filter(e => e)
            data = data.map(e => {
                d[e.split(':')[0]] = e.split(':')[1] 
                return e
            })
            resolve(d)
        })        
    })
}

const docker_logs = (docker_id) => {
    return new Promise((resolve,reject)=>{
        exec(`sudo docker logs -f ${docker_id}`,(err,stdout,stderr)=>{
            if(err)
                return reject(new Error(err))
            resolve(stdout)

        })   
    })
   
}

module.exports={
 docker_logs,
 running_containers,
 docker_systeminfo,
}