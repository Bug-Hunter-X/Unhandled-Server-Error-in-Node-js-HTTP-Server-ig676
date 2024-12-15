const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error('Server error:', err);
  // Add more robust error handling, such as retrying or alerting
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});