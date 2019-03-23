const {spawn} = require('child_process')
const setConnection = (user)=>{

    return new Promise((resolve,reject)=>{
        let child = spawn('ssh',['-o','StrictHostKeyChecking=no','-tt',`${user.name}@${user.ip}`])
        child.stdout.on('data', function(data) {
            resolve(data)
        });
          child.stderr.on('data', function(data) {
            reject(data)
        });
          

})
}
module.exports={
    setConnection
}