let http = require('http');

function handleServer(req,res){
console.log(req.method);
res.writeHead(201,{'Content-Type': 'text/plain'});

res.write("Hello Gangadhar");

res.end("Welcome");

}


let server = http.createServer(handleServer);

server.listen(4444,'localhost');