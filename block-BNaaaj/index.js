console.log("Welcome to Node.js");


let os = require('os');
let fs = require('fs');
const { Buffer } = require('buffer');


let cpus = os.cpus();
let freeMemory = os.freemem();
let version = os.version();
let uptime = os.uptime()
// console.log(cpus);
console.log(freeMemory);
console.log(version);
console.log(uptime);




let buff1 = Buffer.alloc(12);

let buff2 = Buffer.allocUnsafe(12);

let buffWrite = buff1.write("Hello World");

let result = buffWrite.toString();


console.log(buff1)
console.log(buff2);
console.log(buffWrite);
console.log(result);


