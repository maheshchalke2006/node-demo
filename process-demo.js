// process-demo.js

console.log(process.argv);

process.on('uncaughtException', () => {
    console.log('Invalid user input');
})

//Execute it by using following command
//node process.js 11 22

let sum = 0;
for (let i = 2; i < process.argv.length; i++){

    sum += parseInt(process.argv[i]);
}

console.log(`Sum is ${sum}`);

console.log('Sum is %d' , sum);


// You can add validations 

for (let i = 1; i < 15; i++){
    console.log(process.argv[i]);
    if(parseInt(process.argv[i])){
        throw new Error("User input");
    }
    
    
    /*if(1){
        throw new Error("User input");
    }*/
    
    sum += parseInt(process.argv[i]);
}




