
//Global variable

console.log('File name is '+__filename);

console.log('Directory name is '+__dirname);



// Global function 
setInterval(()=>{
    console.log('SetInterval every 1 sec.')
},1000);

setImmediate(()=>{
    console.log('setImmediate next tick');
});

setTimeout(()=>{
    console.log('setTimeout after 2 sec.');
},2000);



//Global module 
//console.log('Global module Process . pid '+process.pid);

//console.log(process);

//console.log(Buffer);

//console.log(module);

console.log(require);



