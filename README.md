# Test IoT connection COAP and MQTT

## COAP
- COAP is a communication between client and server

To test COAP

````
npm i
cd coap_server
node index.js

cd ..
cd coap_client
node client.js

````

## MQTT
- MQTT communicates between client and server through broker. A simple broker is build instead of using Mosquitto for testing purposes

To test MQTT

````
npm i
cd mqttserver
node publish.js

cd ../mqttbroker
node subscribe.js

cd ../mqttclient.js
node subscribe.js

````