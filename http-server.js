const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/' && req.method === 'GET') {
    res.write('<h1>My first server!</h1>');
    res.end();
  }
  else if (req.url === '/about' && req.method === 'GET') {
    res.write('<h1>About</h1>');
    res.end();
  }
  else if (req.url === '/contact' && req.method === 'GET') {
    res.write('<h1>Contact</h1>');
    res.end();
  }
  else if (req.url === '/info' && req.method === 'GET') {
    res.write('<h1>Info</h1>');
    res.end();
  }
  else if (req.url === '/history' && req.method === 'GET') {
    res.write('<h1>History</h1>');
    res.end();
  }
})

server.listen(8000, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${8000}`);
});