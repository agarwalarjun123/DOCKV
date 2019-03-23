const {exec} = require('child_process')
module.exports = (server)=>{
    const io = require('socket.io')(server)

    io.on('connection',(socket)=>{
        socket.on('input',(data)=>{
            exec(`sshpass -p '${process.env.password}' ssh ${process.env.name}@${process.env.IP} `+`docker images;`,(err,stdout,stderr)=>{
                if(err) 
                    console.log(err);
                socket.emit('output',stdout||stderr)
            })
        })

    })
}

