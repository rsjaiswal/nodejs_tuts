const http = require('http');
const port = 3002;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/html');
  res.write('<h1>hello some data available on the server</h1>');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server is running on the http://${hostname}:${port}`); // http://localhost:3002
});
