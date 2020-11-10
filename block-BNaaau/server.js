let http = require('http');
let url = require('url');
// const { runInNewContext } = require('vm');



//1st problem


// function handleServer(req,res){
//     console.log(req,res);
//     res.end();

// }

// let server = http.createServer(handleServer);


// server.listen(5000,'localhost');

//

//2nd problem


// function handleServer(req,res){
    
//     res.end("My first server in NodeJS");

// }

// let server = http.createServer(handleServer);


// server.listen(5100,'localhost');

//

//3rd problem


// function handleServer(req,res){
//     console.log(req.headers);
//     console.log(req.headers['user-agent']);
//     res.end(req.headers['user-agent']);

// }

// let server = http.createServer(handleServer);


// server.listen(5555,'localhost');

//






//4th problem


// function handleServer(req,res){
//     console.log(req.url);
//     console.log(req.method);
//     res.end(`${req.url}, ${req.method}`);

// }

// let server = http.createServer(handleServer);


// server.listen(5566,'localhost');

//




//5th problem


// function handleServer(req,res){
   
//     res.end(`${req.headers}`);

// }

// let server = http.createServer(handleServer);


// server.listen(7000,() => {
//     console.log('server listening on port 7000')
    
// });

//



//6th problem


// function handleServer(req,res){
   
//     res.end(`${req.headers}`);
//     res.statusCode = 202;

// }

// let server = http.createServer(handleServer);


// server.listen(3333,() => {
//     console.log('server listening on port 3333')
    
// });

//



// //7th & 8th problem


// function handleServer(req,res){
   
    
  
//     res.writeHead(202,{'Content-type': 'text/html'});
//     res.end(`<h3>Welcome to altcampus</h3>`)

// }

// let server = http.createServer(handleServer);


// server.listen(8000,() => {
//     console.log('server listening on port 8000')
    
// });

// //




// // 9th problem


// function handleServer(req,res){
   
    
  
//     res.writeHead(202,{'Content-type': 'text/json'});
//     res.end(`{success: true, message: 'Welcome to Nodejs'}`)

// }

// let server = http.createServer(handleServer);


// server.listen(8888,() => {
//     console.log('server listening on port 8888')
    
// });

// 




// // 10th problem


// function handleServer(req,res){
   
    
//   console.log(req.method);
//     res.writeHead(202,{'Content-type': 'text/html'});
//     res.end(`<h2>posted for first time</h2>`)

// }

// let server = http.createServer(handleServer);


// server.listen(5050,() => {
//     console.log('server listening on port 5050')
    
// });

// //



// // 11th problem


// function handleServer(req,res){
   
   
//     if(req.method === 'GET' && req.url === '/'){
//           res.end("Hello Gangadhar");
//     }else if(req.method === 'GET' && req.url === '/about'){
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.end(`<h2>Hello Gangadhar</h2>`)
//     }else{
//         res.statusCode = 404;
//         res.end("Page not found")
//     }
  
//   }
  
//   let server = http.createServer(handleServer);
  
  
//   server.listen(2345,() => {
//       console.log('server listening on port 2345')
      
//   });
  
//   //





// // 12th problem


// function handleServer(req,res){
   
   
//     if(req.method === 'GET' && req.url === '/users'){
//         res.writeHead(200,{'Content-type':'text/html'});
//           res.end(`<input type = text placeholder = name >`);
        
//     }else if(req.method === 'POST' && req.url === '/users'){
//         res.writeHead(200,{'Content-type':'text/plain'});
//         res.end(`Posted for the second time`)
//     }
  
//   }
  
//   let server = http.createServer(handleServer);
  
  
//   server.listen(3000,() => {
//       console.log('server listening on port 3000')
      
//   });
  
//   //




// 13th problem

function handleServer(req,res){
   let prasedUrl = url.parse(`/users?email=nodeserver@gmail.com`,true);
   console.log(prasedUrl.pathname);
   console.log(req.url);
   console.log(prasedUrl.query.email);
   res.writeHead(200,{'Content-type':'text/json'})
   res.end(JSON.stringify(prasedUrl.query))
  
  }
  
  let server = http.createServer(handleServer);
  
  
  server.listen(3000,() => {
      console.log('server listening on port 3000')
      
  });
  
  //