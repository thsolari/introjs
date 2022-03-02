console.log('hello');

//alert('yo');

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
//console.log(someNumber);


//var age = prompt ('What is your age?');

//document.getElementById('sometext').innerHTML = age;

// Numbers in JavaScript
var num1 = 10;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide /, multiply *, remainder %
console.log(num1 % 6);

// Increment, decrement by any number (10)
num1 += 10;
console.log(num1);

/* Fuctions
.1 Create a function
.2 Call the function
*/

//.1
function fun() {
    alert('this')
}

//.2
//fun();

// Function que usa sua informação


function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName; // String concatenation
    console.log(result);
}

var nome = prompt('What is your name?');
greeting(nome);             

// Arguments in functions
// How do we add 2 numbers together in a function?

function someNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

someNumbers(10, 15);
someNumbers('Ei', ' Thiago');

/* While loops

var num = 0;

while (num < 5) {
    num += 1;
    console.log(num);
}
*/


// For loop (better)
for (let num = 0; num <= 3; num++) {

    console.log(num)
}

// Data types
let yourAge = 18;                                   // number
let yourName = 'Bobo';                             // string
//let name = {first: 'John', last: 'Doe'};          // object
let truth = false;                               // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random;                                    // undefined
let nothing = null;                           // value null

// Strings (common methods)
let fruit = 'banana,laranja';
let moreFruits = 'banana\napple';              // new line

console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nana')); // procura a posição da letra na palavra
console.log(fruit.slice(0, 5));
console.log(fruit.replace('ban', "222"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split('')); // split by characters
console.log(fruit.split(',')); // split by commas
