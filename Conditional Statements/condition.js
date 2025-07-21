/*
🔄 What Are Conditional Statements?
==> Conditional statements allow JavaScript to make decisions in code — to execute different
    blocks of code based on whether a condition is true or false.
*/




/*----------------------- Conditional Statements in JavaScript ------------------------*/


//~~~~~~~~~~~~  1. if Statement
//              Executes a block of code only if the condition is true.

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}




//~~~~~~~~~~~~ 2. if...else Statement
//             Runs one block if the condition is true, another if it's false.

let time = 8;

if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}




//~~~~~~~~~~~~ 3. if...else if...else Statement
//             Checks multiple conditions in sequence.

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}




//~~~~~~~~~~~~ 4. switch Statement
//             Selects one of many code blocks to run, based on a fixed value

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Midweek day");
}
