const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883'); // Connect to the MQTT broker

const topic = 'test/topic'; // Replace with the same topic used in the publish script

client.on('connect', () => {
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Subscribed to topic: ${topic}`);
    }else{
      console.error('Error')
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`Received message on topic '${topic}': ${message.toString()}`);
});
