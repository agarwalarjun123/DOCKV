const {exec} = require('child_process')
const running_containers = ()=>{
    return new Promise((resolve,rejects)=>{
        exec('sudo docker ps',(err,stdout,stderr)=>{
            if(err)
                return reject(new Error(err))
            resolve(stdout)
        })
    })
}
const resource_util = (container_id)=>{
    return new Promise((resolve,reject)=>{
        exec(`sudo docker stats ${container_id}`,(err,stdout,stderr)=>{
            if(err)
                return reject(new Error(err))
            resolve(stdout)
        })
        
    })
}
resource_util('bc7').then(console.log).catch(console.log)