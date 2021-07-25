const mqtt = require('mqtt')
const config = require('../config/config')
const mqttClient  = mqtt.connect({
  protocol: 'mqtt',
  host: config.MQTT_BROKER_IP,
  port: config.MQTT_BROKER_PORT  
})


// 디바이스/상태
// plug, hue, door, pir, airmonitor

const topicList = ['bulb/sensor_status', 'plug/sensor_status', 'door/sensor_status', 'motion/sensor_status', 'airmonitor/sensor_status']

mqttClient.on('connect', function () {
  console.log('MQTT Connected!')
  mqttClient.subscribe(topicList)
})

module.exports = mqttClient