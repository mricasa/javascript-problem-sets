// barista problem
// next task is barista  manager 
// https://www.codewars.com/kata/624f3171c0da4c000f4b801d


// MENTAL MODEL WAS BAD FOR THIS ONE.
// UP ON 41 minutes already, bugs and no solution in sight :(
// got it at 53 minutes. 
// Mental model was really bad.
// we were exponentially increasing the wait times for each customer
// instead of just factoring the wait time up until that point (i.e.,
// just taking into account how long the previous customer waited.)

// way to hang in there
/*
Input: Array
output: Number

Rules
=====
- Given a list of the times you need to brew each coffee, return the minimum waiting time
- Minimum waiting time is the sum of all waiting times of the customers
  (you want the smallest possible)


Notes
=====
- It's possible you get no orders []
  -> Return 0, or something other than zero (read problem description)
  -> Trick question?
- One coffee at a time
- Be aware of the waiting period (2 mins after each coffee)
- Order in which you brew the coffee is up to you

DS & A
  
[4, 3, 2]

(Ascending by order time) <- This is the best approach


C ==            (2 mins total)
B ==++===       (7 mins total)
A ==++===++==== (13 mins total)
                = 22

(Descending by order time)
A ====          (4 mins total)
B ====++===     (9 mins total)
C ====++===++== (13 mins total)
                = 26


[] -> 0 || 20 

15 minutes on understanding the problem and DS!!

Algorithm
=========
- Given an array of numbers (brew times)
- Sort the brews ascending by order time
- Declare totalWait
- For brewTime in brews, with idx
  - let lastBrew = brews[idx - 1]
  - re-assign idx of brews to brewTime + lastBrew + 2
-

// [2, 3, 4]

// [2, 7, 13]

// 0: brewTime
// 1: brewTime + (sum all to the left) + 2
// 2: brewTime + (sum all to the left) + 2


*/
function barista(coffees){
  coffees.sort((a, b) => a - b);

  coffees.forEach((brewTime, idx) => {
    if (idx === 0) return;
    coffees[idx] = coffees[idx - 1] + 2 + brewTime;
  });

  return coffees.reduce((sum, num) => sum + num, 0)
}

console.log(barista([2, 3, 4])) // 22



// wtf


