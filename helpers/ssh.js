const {exec} = require('child_process')
const fs = require('fs') 
const setConnection = (user)=>{
    return new Promise((resolve,reject)=>{
            exec(`sshpass -p '${user.password}' ssh ${user.name}@${user.ip} './init.sh'`,(err,stdout,stderr)=>{
                if(err)
                    console.log(err)
                console.log(stdout)
                
            })
            
        })
          
}
module.exports={
    setConnection
}