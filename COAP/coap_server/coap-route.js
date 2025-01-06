const coapController = require('./coap-controller');

module.exports = {
  handleRequest: (req, res) => {
    if (req.method === 'GET') {
      coapController.handleGet(req, res);
    } else if (req.method === 'POST') {
      coapController.handlePost(req, res);
    } else {
      res.code = '4.05'; // Method Not Allowed
      res.end();
    }
  },
};
