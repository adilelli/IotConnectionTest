const coap = require('coap');
const request = coap.request('coap://localhost:5683'); // Replace with your server's IP and port

// Handle the response from the CoAP server
request.on('response', (res) => {
  res.pipe(process.stdout); // Print the response to the console
  res.on('end', () => {
    process.exit(0); // Close the client after receiving the response
  });
});

// Send a GET request
request.end();

// To send a POST request, replace the GET request code with the following:
// request.method = 'POST';
// const payload = 'Data to send in the POST request';
// request.write(payload);
// request.end();
