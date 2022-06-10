/*
Input: Array & Number
Output: Number


(over 90 mins but fun)
definitely worth more exploration

Rules
=====
- Given a list of orders and number of machines
- Return the minimum time needed for all customers
  to wait for their coffee

  -Minimum time = to the sum of all waiting times

- Argument 1: Time to brew as an array
  - A "brew time" of "0" (number) is water
    - Do not need to clean machine

  
  - Other numbers are coffee times

- Argument 2: Number of machines available

Notes
=====
- If a customer asks for water, the time to
  "brew" is 0. Also, you do not need to clean
  the machine.

  - Water will occupy a machine
  - but no clean time

- Cleaning time for machines is 2 minutes

- Do not consider IRL behaviors
  - Coffee machines are self-cleaning
  - Don't consider walk time
  - Someone cleans up the shop for you

- If there are no orders, return 0

- At beginning of the day, do not need to clean
  for first order

- You choose the order of brew


Examples
========
[0,0,1] , 1 => 1 

[2,3,4] , 1 => 22
(2, 7, 13) 


Two machine example
===================
[2,3,4] , 2 => 14


Say we do the third and second coffees first

Machine 1: Customer 3: Waits 4
Machine 2: Customer 2: Waits 3 .. Clean machine, 
                                        + 2 mins
Machine 2: Customer 1: Waits 7 minutes

= Total of 14 minutes
 

What would be the fastest way?      =#= : machine
= Total should be 13 mins           {#} : customer

[2, 3, 4]

=1= {1} waits 2 .. Clean machine
=2= {2} waits 3

=1= {3} waits 8

= 13 minutes total

Approach is still to sort brew times from
shortest to longest.


3 machines
==========
[2,3,4]

=1= {1} waits 2
=2= {2} waits 3
=3= {3} waits 4

= 9 minutes total


Thoughts
========
- We can safely take the same approach as before
  by tackling cups in the order of shortest brewTime
  to longest brewTime

- But how do we know which cofee machine is free?


DS
==
- Coffee shop DS...

- Order queue is an array (this is given)
  - Sort it, ascending from short to long brewtimes

- Coffee makeline is a two dimensional nested array
  - Number of 2nd-level arrays is = to machines

Two machines
============
[2, 3, 4]

  [
  []
  []
  ]

Iterate through orders...

2...
Are any of the arrays empty?
Yes.

  [
  [2]
  []
  ]

3...
Are any of the arrays empty?
Yes.

  [
  [2]
  [3]
  ]

4...
Are any of the arrays empty?
No.
Reference the last element of the subarrays
Which one is the smallest?

  [
  [2] *
  [3]
  ]

Then push to that array the sum of...
- Value of last element
- Value of brewTime (4)
- Value of cleaningTime (2 in this case)

  [
  [2, 8]
  [3]
  ]


Algorithm
=========
- Given an array (orders), and coffee machines
- Declare makeline initialize to an array of N arrays (coffee machines)
  - [...Array(N)] and transform each element to empty arrays

- Sort the orders numerically, ascending

- Iterate through brew in orders...
  - (helper) findMachine(makeline)
  - => Initialize returned index to mIndex

  - Call makeCoffee (brew, makeline, mIndex) (we want to mutate makeline)
- END after done with brews


- Sum total wait time
  - Sum the sum of sums
    - sum the machine subArray

return total wait time


---------------------
Helper: findMachine(makeline)
- Declare machineNumber;
- Declare shortestDuration;

- If there are any empty arrays return that index

- Iterate over machine (subarray) with index in makeline


  - Declare lastBrew (time), initialized to the last element of machine
  
  - if shortestDuration is undefined
      initialize shortestDuration to lastBrew
      machineNumber assign to index

  - else if lastBrew < shortestDuration
      Assign shortestDuration to lastBrew
      machine assign to index

- Return machineNumber

------------------------
Helper: makeCoffee(brew, makeline, mIndex) (the core barista function)

- Declare currentMachine initializing to the subarray of makeline at index

- Declare previousCup initialized to the last value in currentMachine

- Declare cleanTime initialize to
    !previousCup === 0 ? 2 : 0  (accounts for water)

- If previous cup is undefined
  push brew to currentMachine

- Otherwise, 
  push (previousCup + brew + cleanTime) to currentMachine


*/



function findMachineIdx(makeline) {
  let shortestDuration;
  let machineNumber = makeline.findIndex(machine => machine.length === 0);

  if (machineNumber !== -1) return machineNumber;

  for (let idx = 0; idx < makeline.length; idx++) {
    let machine = makeline[idx];
    let lastBrew = machine[machine.length - 1];


    if (shortestDuration === undefined) {
      shortestDuration = lastBrew;
      machineNumber = idx;

    } else if (lastBrew < shortestDuration) {
      shortestDuration = lastBrew;
      machineNumber = idx;
    }
  }

  return machineNumber;
}


function brewCoffee(brew, makeline, idx){

  let currentMachine = makeline[idx];

  let previousCup = currentMachine[currentMachine.length - 1];

  let cleanTime = !(previousCup === 0) ? 2 : 0;

  if (previousCup === undefined) {
    currentMachine.push(brew)
  } else {
    currentMachine.push(previousCup + cleanTime + brew);
  } 

}


function barista(coffees, cMachines) {
  let makeline = [...Array(cMachines)].map(ele => []);

  let orders = [...coffees].sort((a, b) => a - b);

  for (let order = 0; order < orders.length; order++) {
    let mIndex = findMachineIdx(makeline);
    let brew = orders[order];
    
    brewCoffee(brew, makeline, mIndex);
  }

  return makeline.map(subarr => {
    return subarr.reduce((sum, num) => sum + num, 0)
  }).reduce((sum, num) => sum + num, 0)

}


// Algorithm
// =========
// - Given an array (orders), and coffee machines
// - Declare makeline initialize to an array of N arrays (coffee machines)
//   - [...Array(N)] and transform each element to empty arrays

// - Sort the orders numerically, ascending

// - Iterate through brew in orders...
//   - (helper) findMachine(makeline)
//   - => Initialize returned index to mIndex

//   - Call makeCoffee (brew, makeline, mIndex) (we want to mutate makeline)
// - END after done with brews


// - Sum total wait time
//   - Sum the sum of sums
//     - sum the machine subArray

// return total wait time


console.log(barista([2,3,4], 1))//, 22)
console.log(barista([2,3,4], 2))//, 13);
console.log(barista([2,3,4], 3))//, 9);
