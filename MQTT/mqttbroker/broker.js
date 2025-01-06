const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883; // MQTT broker port

server.listen(port, function () {
  console.log('MQTT broker listening on port ' + port);
});
