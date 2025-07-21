//--------------------- FOR IN LOOP IN JS
/*
Definition: for...in is used to loop over properties (keys) of an object.
*/


//🔹 Syntax:
/*
for (let key in object) {
  // use key or object[key]
}
*/
// OR







// Example: Display Object Properties
let person = {
  name: "Cloud",
  age: 18,
  job: "Developer",
  city: "Dhaka"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

/*
Explanation:
# Loops through every key in the person object

# Accesses both key and its value with person[key]
*/