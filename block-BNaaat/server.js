let http = require('http');

let fileSystem = require('fs');

function handleServer(req,res){

    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-type','text/html');
        fileSystem.createReadStream('./node.html').pipe(res);
        
    }
}



let server = http.createServer(handleServer);

server.listen(5555,'localhost')