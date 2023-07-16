const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(port, '35.232.91.151', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});
