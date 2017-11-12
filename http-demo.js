const http = require('http');

const server = http.createServer((rq, res)=>{
    res.write("Done");
    res.end();
});

server.listen(3000);
