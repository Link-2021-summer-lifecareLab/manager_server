const http = require('http')
const IO = require('socket.io')

module.exports = (app) => {
    const httpServer = http.createServer(app)
    const io = IO(httpServer)

    io.on('connection', socket=>{
        console.log('connected!')
        socket.on('airmonitor/network_status', data=>{
            console.log(data)
        })
    })
    return httpServer
}