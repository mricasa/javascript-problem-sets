/*
28 total minutes, cutting it close

Input: Two Strings of Integers
        - One for good
        - One for evil
Output: String (Battle result message)


Rules
=====
- Forces of a good and evil can be compared using worth
- Each race has a worth value
- You will be given two string arguments containing space separated integers
  in a set order
  - The first represents the count of each good race
  - The second represents the count of each evil race
- Compare the sum of worth for each side
- Return a string that declares the result of the battle
  - 3 options: Good wins, evil wins, or a tie

Notes
=====
- Resulting sum won't exceed the limit of a 32-bit integer
- All values are non-negative integers

Implicit requirements
- Will arguments always be valid?
- WIll string arguments always have a standard legnth that would represent
    each possible race?
- We are returning a string? Or printing?

[5 mins]

DS + A
======
"1 1 1 1 1 1" vs. "1 1 1 1 1 1 1"
(1 * 1) + (1 * 2) + (1 * 3) ... 
compare sums

Algorithm
=========
goodVsEvil(good, evil)
- re-assign good and evil to arrays of integers (split each)



(Helper: Get total points)
- Given an army (array of races)
- Declare  points;
- Is the army length 6 ?
  - YES: Good Branch
    - Reduce with index
      - (element at index of army) * (element at index of GOOD_WIN)
      - => Return accumulator + Product
    - Reduce will return total Points
    - => Use the returnv value of reduce to re-assign points

  - NO: (clause identical to Good branch, except drawing on EVIL_WORTH)
*/

const GOOD_WORTH = [1, 2, 3, 3, 4, 10];
const EVIL_WORTH = [1, 2, 2, 2, 3, 5, 10];

const EVIL_WIN = 'Battle Result: Evil eradicates all trace of Good';
const GOOD_WIN = 'Battle Result: Good triumphs over Evil';
const TIE = 'Battle Result: No victor on this battle field';

function totalPoints(armyString) {
  let array = armyString.split(" ").map(num => +num);
  let worthVals = (array.length === 6) ? GOOD_WORTH : EVIL_WORTH;

  return array.reduce((points, raceCount, idx) => {
    let raceWorth = worthVals[idx];
    return points + (raceCount * raceWorth);
  }, 0)
}

function goodVsEvil(good, evil) {
  let goodPoints = totalPoints(good);
  let evilPoints = totalPoints(evil);

  if (goodPoints > evilPoints) return GOOD_WIN;
  else if (goodPoints < evilPoints) return EVIL_WIN;
  else return TIE;
}



console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))