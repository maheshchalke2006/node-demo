const repl = require('repl');
const readline = require('readline');

const readlineobj = readline.createInterface(process.stdin);

let inputs = [];
readlineobj.on('line',(userInput)=> {
    inputs.push(userInput);
})



//console.log(repl);

const obj = repl.start();

obj.defineCommand('sum', () => {
    let sum = 0;
    for(let i = 0; i < inputs.length; i++){
        if(parseInt(inputs[i]) != 0)
        sum += parseInt(inputs[i]);

        console.log(parseInt(inputs[i]));
    }
    console.log('Sum executed.'+ sum);
    console.log(inputs);
})