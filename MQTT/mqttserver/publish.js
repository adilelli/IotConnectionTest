const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883'); // Connect to the MQTT broker

let messageNumber = 1;

const publishMessage = () => {
  if (messageNumber <= 100) {
    const topic = 'mytopic'; // Replace with your desired topic
    const message = messageNumber.toString();

    client.publish(topic, message);
    console.log(`Published: ${message}`);

    messageNumber++;

    setTimeout(publishMessage, 1000); // Publish every 1 second
  } else {
    client.end(); // Close the MQTT client
  }
};

client.on('connect', () => {
  publishMessage();
});
