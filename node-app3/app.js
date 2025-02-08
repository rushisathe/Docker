const fs = require('fs');
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    // Volume Mount Test: Check if file exists
    fs.writeFileSync('/app/data/volume-test.txt', 'Docker Volume is working!');
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Dockerized Node.js App!\n');
});

server.listen(port,'0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
});

