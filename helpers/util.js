const {exec} = require('child_process')

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

const docker_container_info = (docker_id)=>{
    return new Promise((resolve,reject)=>{
        exec(`sudo docker stats ${docker_id} --no-stream | awk '{print $1}{print $4}{print $7}{print $3}'`,(err,stdout,stderr)=>{
            if(err)
                return reject(new Error(err))
            let data = stdout.slice(stdout.indexOf('USAGE')+5)

            data = data.split('\n')
            data = data.filter(e => e)
            let obj={}
            obj['container_id'] = data[0]
            obj['ram'] = data[1]
            obj['utilization'] = data[2]    
            obj['cpu'] =  data[3]         
            resolve(obj)
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
 docker_container_info   
}