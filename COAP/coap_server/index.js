const coap = require('coap');
const coapRoute = require('./coap-route');

const coapServer = coap.createServer();

coapServer.on('request', (req, res) => {
  coapRoute.handleRequest(req, res);
});

const port = 5683; // CoAP default port

coapServer.listen(port, () => {
  console.log(`CoAP server is running on port ${port}`);
});
