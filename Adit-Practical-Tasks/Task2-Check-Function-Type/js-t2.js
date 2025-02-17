// JavaScript Program to Check If a Variable is of Function Type

let myFunction = function() {
    console.log("This is a function");
};

let myFunction2 = 'blue'
let myFunction3 = {
    name: 'John',
    age: 30,
    color: 'green',
}

console.log(typeof myFunction === "function"); 
console.log(typeof myFunction2 === "function");
console.log(typeof myFunction3 === "function");