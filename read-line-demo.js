//Its not default module so you need to add it 
const readline = require('readline');

//console.log(readline);

const obj = readline.createInterface(process.stdin,process.stdout);

obj.on('line',(input)=>{
    console.log('You have entered '+ input)
});

obj.on('SIGINT',()=>{
    obj.question("Are you sure?", (ans) => {
        if (ans == 'y') {
            obj.close();
        }
    })
});

process.on('exit', () => {
    console.log('done');
})