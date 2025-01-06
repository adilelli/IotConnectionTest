const coap = require('coap');

function sendPostRequest() {
  const request = coap.request({
    hostname: 'https://coap-test.vercel.app/', // Replace with your server's IP or hostname
    port: 5683, // CoAP default port
    method: 'POST', // Use POST method
  });

  // POST request payload
  const payload = 'This is a CoAP POST request payload';

  // Handle the response from the CoAP server
  request.on('response', (res) => {
    res.pipe(process.stdout); // Print the response to the console
  });

  // Send the POST request with the payload
  request.write(payload);
  request.end();
}

// Send a POST request every 15 seconds
setInterval(() => {
  sendPostRequest();
}, 2500); // 15,000 milliseconds = 15 seconds
