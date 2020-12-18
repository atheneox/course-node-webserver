const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let output = {
        name: 'Athen',
        age: 26,
        url: req.url
    }
    res.write(JSON.stringify(output));
    res.end();
}).listen(8080);

console.log(`Listen 8080`);