/*
🧮 What is an Operator in JavaScript?
==> An operator is a symbol that tells the JavaScript engine to perform a specific
operation (like addition, comparison, or logic) on one or more values (operands).


🧠 What is an Expression in JavaScript?
==> An expression is any valid piece of code that resolves (or evaluates) to a value.
*/


/*------------------ Operators in JavaScript----------------------*/

//~~~~~~~~~~~~~~ 1. Arithmetic Operators
//               Arithmetic operators are used to perform basic mathematical operations like addition, subtraction, etc.
let a = 10;
let b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.333...
console.log(a % b);  // Modulus: 1
console.log(a ** b); // Exponentiation: 1000
console.log(++a);    // Pre-increment: 11
console.log(b--);    // Post-decrement: 3 (then becomes 2)





//~~~~~~~~~~~~ 2. Assignment Operators
//             Assignment operators assign values to variables and can also perform operations during assignment.
let x = 5;

x += 2;   // Same as x = x + 2
console.log(x); // 7

x -= 1;   // Same a x = x - 1
console.log(x); // 6

x *= 3;   // Same as x = x * 3
console.log(x); // 18

x /= 6;   // Same as x = x / 6
console.log(x); // 3

x %= 2;   // Same as x = x % 2
console.log(x); // 1







//~~~~~~~~~~~~ 3. Comparison Operators
//             Comparison operators compare two values and return a boolean result (true or false).
let num = 10;
let str = "10";

console.log(num == str);   // true (loose equality)
console.log(num === str);  // false (strict equality)
console.log(num != str);   // false
console.log(num !== str);  // true
console.log(num > 5);      // true
console.log(num < 20);     // true
console.log(num >= 10);    // true
console.log(num <= 9);     // false







//~~~~~~~~~~~ 4. Logical Operators
//           Logical operators are used to combine multiple conditions or invert a boolean value.
let age = 20;
let isStudent = true;

console.log(age > 18 && isStudent);  // true
console.log(age < 18 || isStudent);  // true
console.log(!isStudent);             // false








//~~~~~~~~~~ 5. String (Concatenation) Operator
//           The + operator can also join (concatenate) strings.

let firstName = "Cloud";
let lastName = "Code";

let fullName = firstName + " " + lastName;
console.log(fullName);  // "Cloud Code"







//~~~~~~~~~~ 6. Ternary (Conditional) Operator
//           The ternary operator condition ? value1 : value2 is a shortcut for if-else.
let score = 75;

let result = (score >= 60) ? "Pass" : "Fail";
console.log(result);  // "Pass"








//~~~~~~~~~~ 7. Type Operators
//           These are used to check the type of a variable or object.
let value = 42;
console.log(typeof value);  // "number"

let today = new Date();
console.log(today instanceof Date);  // true







//~~~~~~~~~~ 8. Bitwise Operators (Advanced)
//           Bitwise operators work on the binary (bit) representation of numbers.



let num1 = 5;    // 0101
let num2 = 3;    // 0011

console.log(num1 & num2); // 1  (0101 & 0011 = 0001)
console.log(num1 | num2); // 7  (0101 | 0011 = 0111)
console.log(num1 ^ num2); // 6  (0101 ^ 0011 = 0110)
console.log(~num1);    // -6 (Bitwise NOT)

