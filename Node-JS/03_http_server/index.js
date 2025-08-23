const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header
    res.end('Hello!'); // Response Body
});


// Start server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});