//-------------------- FOR OF LOOP IN JS (ES6 Feature)
/*
Definition: for...of is used to loop through the values of an iterable object like arrays or strings.
*/

//🔹 Syntax:
/*
for (let item of iterable) {
  // use item
}
*/
// OR









// Example: Greet Each Student
// 1.
let students = ["Asha", "Brian", "Carlos", "Dina"];

for (let student of students) {
  console.log(`Welcome, ${student}!`);
}


// 2. for of with string
let person = "Cloud";
for(let char of person){
    console.log(char)
}




/*
Explanation:
# for...of directly gives each value from the array

# Simpler and safer than using for or while on arrays 
*/