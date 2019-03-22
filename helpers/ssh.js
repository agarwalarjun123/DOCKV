const {spawn} = require('child_process')
const setConnection = (user)=>{
    return new Promise((resolve,reject)=>{
        let child = spawn('ssh',[],{
            shell:true
        })
        child.stdout.on('data', function(data) {
            console.log('stdout: ' + data);
          });
          child.stderr.on('data', function(data) {
            console.log('stderr: ' + data);
          });
          

})
}
module.exports={
    setConnection
}