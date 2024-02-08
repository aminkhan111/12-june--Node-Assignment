const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
  }
  res.end('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>');
});
server.listen(5001);
console.log('The HTTP Server is running on port 5001');  
