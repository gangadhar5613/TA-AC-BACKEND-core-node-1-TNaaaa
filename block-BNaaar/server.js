let http = require('http');

let url = require('url');

function handleServer(req,res){
let parsedUrl = url.parse(req.url);
let pathName = parsedUrl.pathname;
if(req.method === 'GET' && pathName === '/'  ){
    res.write("Welcome to homepage")
}else if( req.method === 'GET' && pathName === '/about'){
    res.setHeader({'Content-Type' :'text/html'});
    res.end("<h2>this is all  about Node.js</h2>")
}else if(req.method === 'POST' && pathName === '/about'){
    res.setHeader({'Content-Type' :'text/plain'});
    res.end(`{message: this is a post request}`)
}else{
    res.end("No page")
}


}

let server = http.createServer(handleServer);

server.listen(5000,'localhost');