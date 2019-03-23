const {exec} = require('child_process')
const fs = require('fs') 
const setConnection = (user)=>{
    return new Promise((resolve,reject)=>{
            exec(`sshpass -p '${user.password}' ssh ${user.name}@${user.ip} 'df -h'`,(err,stdout,stderr)=>{
                if(err)
                    console.log(err)
                console.log(stdout)
                console.log(stderr)
                
            })
            
        })
          
}
module.exports={
    setConnection
}