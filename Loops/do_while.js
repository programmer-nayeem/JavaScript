//-----------------------DO WHILE LOOP IN JS
/*
Definition: A do...while loop runs at least once, even if the condition is false on the first check.
*/


//🔹 Syntax:
/*
do {
  // code to run
} while (condition);
*/
// OR
let i = 1;
do {
  console.log("Value:", i);
  i++;
} while (i <= 5);








// Example: Simulate User Input Until 5 is Entered
let input;
let attempts = 0;

do {
  input = Math.floor(Math.random() * 10); // random 0–9
  console.log("User input:", input);
  attempts++;
} while (input !== 5);

console.log("Correct input (5) received after", attempts, "tries.");

/*
Explanation:
# Randomly "simulates" input

# Repeats until number 5 is found

# Always runs at least once!
*/