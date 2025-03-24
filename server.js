const http = require('http');

const server = http.createServer((req, res) => {
    console.log(res)
    res.end(JSON.stringify({message: 'Hello World!'}));
})

server.listen(8080);