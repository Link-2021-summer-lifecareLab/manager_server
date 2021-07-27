const mqtt = require('mqtt')
const config = require('../config/config')
const mqttClient  = mqtt.connect({
  protocol: 'mqtt',
  host: config.MQTT_BROKER_IP,
  port: config.MQTT_BROKER_PORT  
})



mqttClient.on('connect', function () {
  console.log('MQTT Connected!')
  mqttClient.subscribe(config.TOPIC_LIST)
})

module.exports = mqttClient