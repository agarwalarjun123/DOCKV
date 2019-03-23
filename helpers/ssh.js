const {exec} = require('child_process')
const setConnection = (user)=>{
    return new Promise((resolve,reject)=>{
            exec(`sshpass -p '${process.env.password}' ssh ${process.env.name}@${process.env.IP} './init.sh'`,(err,stdout,stderr)=>{
                if(err)
                    reject(err)
                console.log(stdout)
                resolve(stdout)

                
            })
            
        })
          
}
module.exports={
    setConnection
}