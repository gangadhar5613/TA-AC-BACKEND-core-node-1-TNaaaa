const { Buffer } = require('buffer');
let fs = require('fs');

fs.readFile('./content.md', (err, file) => {
    console.log(err,file);
  })


let buff1 = Buffer.alloc(10);
let buff2 = buff1.write("Welcome to buffer");
console.log(buff1);
console.log(buff2);