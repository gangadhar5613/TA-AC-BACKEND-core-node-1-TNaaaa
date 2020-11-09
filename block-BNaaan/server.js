let http = require('http');


function handleServer(req,res){
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);

    res.end("Welcome to server");
}



let server = http.createServer(handleServer);

server.listen(3000,'localhost');

