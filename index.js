const express = require('express');
const config = require('./config/config')
const app = express();

const httpServer = require('./services/websocket')(app)
const mqtt_client = require('./services/mqtt')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendStatus(200)
})



httpServer.listen(config.PORT)