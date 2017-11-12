//first.js

let x = 10;
x = x + 10;

console.log(x);

x = "Result is 10";

console.log(x);

const y = 10;

//y = 100; //error

/***************************** */

class Person {

}

class Employee extends Person {

}

function Add(n1,n2) {
    return n1 + n2;
}

var result = Add(11,22);
console.log(result);

//Arrow function
var subtraction = (n1, n2) => n1 - n2;

var subtractionResult = subtraction(100,50);

console.log('Substraction is : - '); console.log(subtractionResult);
