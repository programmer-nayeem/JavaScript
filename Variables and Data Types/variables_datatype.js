//----------------------------  Variables in JavaScript

// | Keyword | Scope          | Reassignable | Hoisted | Common Use                    |
// | ------- | -------------- | ------------ | ------- | ----------------------------- |
// | `var`   | Function scope | ✅ Yes        | ✅ Yes   | Legacy code                   |
// | `let`   | Block scope    | ✅ Yes        | ❌ No    | Preferred for changing values |
// | `const` | Block scope    | ❌ No         | ❌ No    | Preferred for constants       |

var x = 10;
let y = 20;
const z = 30;




//---------------------------- Data Types in JavaScript

// 1. Primitive 

let name = "Cloud";         // String
let age = 25;               // Number
let isOnline = true;        // Boolean
let score = null;           // Null
let value;                  // Undefined
let id = Symbol("user");    // Symbol
let bigNumber = 9007199254740991n; // BigInt

// 2. Non Primitive

let user = { name: "Cloud", age: 25 }; // Object
let numbers = [1, 2, 3];               // Array
let greet = function() { console.log("Hi!"); }; // Function






//---------------------- Checking Types(typeof)

typeof "Hello"        // "string"
typeof 123            // "number"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof null           // "object"   ❗ (this is a quirk)
typeof [1, 2, 3]      // "object"
typeof function(){}   // "function"
