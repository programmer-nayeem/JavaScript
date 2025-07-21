//--------------------- FOR LOOP IN JS
/*
## Definition: A for loop repeats a block of code a known number of times. It's best when you know how many times to loop in advance.
*/


//🔹 Syntax:
/*
 for (initialization; condition; increment/decrement) {
      // code to repeat
}
*/

//OR
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}











//💡 Example: Print and Sum Even Numbers (1–100)

let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("Even number:", i);
    sum += i;
  }
}

console.log("Total sum of even numbers from 1 to 100 is:", sum);

/*
Explanation:
1. i = 1: Start from 1

2. i <= 100: Run while i is 100 or less

3. i++: Increase by 1 each time

4. Inside: Only print even numbers and add them to sum
*/