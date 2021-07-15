const mqtt = require('mqtt')
const config = require('../config/config')
const mqtt_client  = mqtt.connect({
  protocol: 'mqtt',
  host: config.MQTT_BROKER_IP,
  port: config.MQTT_BROKER_PORT  
})

// 디바이스/상태
// plug, hue, door, pir, airmonitor
const subscribe_list = ['airmonitor/sensor_status', 'airmonitor/network_status', ]
mqtt_client.on('connect', function () {
  mqtt_client.subscribe('airmonitor/sensor_status')
  mqtt_client.subscribe('airmonitor/network_status')
  
})

mqtt_client.on('message', (topic, msg)=>{
    if(topic==='airmonitor/sensor_status'){
        console.log(JSON.parse(msg))    
    }
})

module.exports = mqtt_client