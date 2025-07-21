/*
🔁 Definition of Loops in JavaScript:
Loops in JavaScript are used to execute a block of code repeatedly, either a specific number of times or until a particular condition is met.
They are essential for automating repetitive tasks, processing data structures like arrays, and controlling program flow dynamically.


🌀 Types of Loops in JavaScript (with Explanation):

1. for loop:
# Purpose: Used when you know in advance how many times you want to execute a block of code.

# How it works: It has three parts:

                Initialization: Sets the starting point (usually a counter).
                Condition: Evaluated before each iteration; the loop runs only if this is true.
                Increment/Decrement: Changes the counter after each loop.

# Example use: Iterating through an array by index.






2. while loop:
# Purpose: Used when you want to run a block of code as long as a specific condition is true.

# How it works: Checks the condition before each iteration. If it's true, the code runs; if false, the loop stops.

# Best for: Unknown number of iterations where the end condition depends on something dynamic.






3. do...while loop:
# Purpose: Similar to the while loop, but guarantees that the code inside the loop runs at least once, even if the condition is false initially.

# How it works: Executes the code block first, then checks the condition after.

# Best for: Scenarios where the loop body must run before checking the condition.









4. for...in loop:
# Purpose: Used to iterate over enumerable properties of an object (like keys in a JavaScript object).

# How it works: Goes through each key (property name) of the object.

# Note: Not ideal for arrays, because it doesn't guarantee order and includes inherited properties.







5. for...of loop:
# Purpose: Used to iterate over iterable objects like arrays, strings, maps, sets, etc.

# How it works: Loops through the values of the iterable directly (not the keys or indices).

# Best for: Arrays and any collection where you care about values, not indexes.








6. break and continue (Loop Control Statements):
# break: Immediately exits the loop, even if the condition is still true.

# continue: Skips the current iteration and moves to the next one.

*/




// Loop coparison 
/*
📊 Loop Comparison Table

-----------------------------------------------------------------------------
Loop Type              |            Best Used For                            
-----------------------------------------------------------------------------
for                    |            Fixed number of iterations              

while                  |            Unknown number of times (until condition)

do...while             |            At least one run, then condition check

for...in               |            Loop through object properties (keys)

for...of               |            Loop through array or string values 
-----------------------------------------------------------------------------
*/