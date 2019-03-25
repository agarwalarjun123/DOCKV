const {spawn} = require('child_process')
module.exports = (server)=>{
    const io = require('socket.io')(server)
    
    io.on('connection',(socket)=>{
        let child = spawn('sudo',['docker','stats',`845`])
        child.stdout.on('data',(data)=>{
            
            if(data.toString().split('\n')[1]){
                data = data.toString().split('\n')[1].split(' ')
                data = data.filter(d => d)
                socket.emit('data',data)
            }

        })
        child.stderr.on('data',(data)=>console.log(data.toString()))
        
    })
}

