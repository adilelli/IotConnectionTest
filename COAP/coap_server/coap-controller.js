module.exports = {
    handleGet: (req, res) => {
      // Handle a CoAP GET request
      const responsePayload = 'Suppp dawwgggg';
      res.setOption('Content-Format', 'text/plain');
      res.end(responsePayload);
    },
  
    handlePost: (req, res) => {
      // Handle a CoAP POST request
      const payload = req.payload.toString();
      // Process the payload and perform any necessary actions
      const responsePayload = `Received CoAP POST: ${payload}`;
      res.setOption('Content-Format', 'text/plain');
      res.end(responsePayload);
    },
  };
  