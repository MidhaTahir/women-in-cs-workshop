
// 1. Variables:
let name = 'John';
const dob = 1999;
var isAdmin = true;


// 2. Data Types:
let count = 10;
let message = 'Hello';
let isLogged = true;
let fruits = ['apple', 'banana', 'orange'];
let person = { name: 'John', age: 25 };


// 3. Operators:
let x = 10;
let y = 5;
let sum = x + y;
let isGreater = x > y;
let fullName = 'John' + ' Doe';


// 4. Conditional Statements:
let age = 18;

if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}


// 5. Loops:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


// 6. Functions:
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('John');


// 7. Event Handling:
document.querySelector('button').addEventListener('click', function() {
  console.log('Button clicked!');
});


// 8. DOM Manipulation:
document.getElementById('myElement').textContent = 'Updated text';