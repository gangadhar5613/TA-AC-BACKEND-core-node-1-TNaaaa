let http = require('http');


function handleRequest(req,res){
    res.end("Welcome");
}

let server = http.createServer(handleRequest);

server.listen(4000,'localhost');


