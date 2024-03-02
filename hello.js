// Variables
let greeting = "Hello, world!";
const PI = 3.14159;
var count = 0;

// Functions
function greet(name) {
  return "Hello, " + name + "!";
}

function square(x) {
  return x * x;
}

function sum(a, b) {
  return a + b;
}

// Object with method
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

// Arrow function
let cube = (x) => {
  return x * x * x;
};

// Usage
console.log(greeting);
console.log("PI:", PI);
console.log("Square of 5:", square(5));
console.log("Sum of 3 and 7:", sum(3, 7));
console.log(greet("Alice"));

console.log("Addition using calculator object:", calculator.add(3, 4));
console.log("Cube of 3 using arrow function:", cube(3));
