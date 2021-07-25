const http = require('http')
const IO = require('socket.io')
const mqttClient = require('./mqtt')

module.exports = (app) => {
    const httpServer = http.createServer(app)
    const io = IO(httpServer, {
        cors: {origin: "*"}
    })

    io.on('connection', socket=>{
        console.log('Websocket connected!')
        
        mqttClient.on('message', (topic, data)=>{
            // console.log(JSON.parse(data))
            socket.emit(topic, JSON.parse(data))
        })
        socket.on('bulb/change', data=>{
            console.log(data)
            mqttClient.publish('bulb/change', JSON.stringify(data))
        })
        socket.on('plug/change', data=>{
            
            console.log(data)
            mqttClient.publish('plug/change', JSON.stringify(data))
            
        })
    })
    
    return httpServer
}