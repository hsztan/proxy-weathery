const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200);

  const dataObj = { name: 'John', age: '30' };
  const data = JSON.stringify(dataObj);

  res.end(data);
});

server.listen(1234, () => {
  console.log('Server is running on port 1234');
});
