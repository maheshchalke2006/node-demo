const fs = require('fs');

//console.log(fs);

fs.readFile('test.txt', (err, data)=>{
    console.log(data);
});

fs.readFile('E:\maheshchalke\node-demo\filenotfound.txt',(err, data) => {
    if (err) {
        console.error('404' + err);
    }else {
        console.log(data);
    }
});

//const big = fs.createReadStream('e:/bigfile.mp3',{encoding:"UTF-8"});
const big = fs.createReadStream('test.txt',{encoding:"UTF-8"});

big.on('data', (data) => {
    console.log(data);
})

