//----------------------- ARRAY IN JAVASCRIPT
//Definition: An array is a special variable that can store multiple values in a single variable.


// Example or Array Creation : 
let fruits = ["Apple", "Banana", "Orange"]; // # Index starts at 0          # fruits[0] is "Apple"
let numbers = [1, 2, 3, 4];
let colors = new Array("Red", "Green", "Blue");
let empty = []; // empty array



//~~~~~~~~~~~~~~~~~~~~ Common Array Methods in JavaScript (With Explanations)

// 1. push() – Add to end
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Orange"]


// 2. pop() – Remove last item
fruits.pop();
console.log(fruits); // ["Apple", "Banana"]


// 3. unshift() – Add to start
fruits.unshift("Coconat");
console.log(fruits); // ["Mango", "Apple", "Banana"]


// 4. shift() – Remove first item
fruits.shift();
console.log(fruits); // ["Apple", "Banana"]


// 5. length – Get size of array
console.log(fruits.length); // 2


// 6. includes() – Check if item exists
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Pinapple")); // false


// 7. indexOf() – Find index of value
console.log(fruits.indexOf("Banana")); // 1


// 8. join() – Convert array to string
let result = fruits.join(", ");
console.log(result); // "Apple, Banana"


// 9. concat() – Combine two arrays
let vegetables = ["Carrot", "Tomato"];
let combined = fruits.concat(vegetables);
console.log(combined); // ["Apple", "Banana", "Carrot", "Tomato"]


// 10. slice(start, end) – Copy part of an array
let copy = fruits.slice(0, 2);
console.log(copy); // ["Apple", "Banana"]


// 11. splice(start, deleteCount, items...) – Add/remove items
fruits.splice(0,1, "Kiwi");
console.log(fruits); // ["Apple", "Kiwi", "Banana"]


// 12. reverse() – Reverse the array
numbers.reverse();
console.log(numbers); // [4 , 3, 2, 1]


// 13. sort() – Sort alphabetically
let names = ["Cloud", "Mikasa", "Eren"];
names.sort();
console.log(names); // ["Alice", "Bob", "Charlie"]


// 14. toString() – Convert array to comma-separated string
console.log(fruits.toString()); // "Apple,Banana"



/*
 |---------------------------------------------------------|
 |Some more array methods will be shown in the es6 feature.|
 |---------------------------------------------------------|
*/







// ~~~~~~~~~~~~~ Loop Through Arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


for (let fruit of fruits) {
  console.log(fruit);
}


fruits.forEach(fruit => console.log(fruit));
