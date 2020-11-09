let http = require('http');

function handleServer(req,res){
console.log(req.headers);
res.writeHead(201,{'Content-Type': 'text/html'});

res.write("Hello Gangadhar");

res.end("Welcome");

}


let server = http.createServer(handleServer);

server.listen(4444,'localhost');