// The Deaf Rats of Hamelin

/*
Input: String
Output: Number

Rules
=====
- Return the number of deaf rats
  - Dead rat = Rat is not following the pied piper

Implicit req
- The pied piper can be on the left, the right, or middle of the string
  sequence

    ~O P ~O
    = One deaf rat

- Assuming always a valid argument
- Rats will always have a tail

- There may be blank spaces in the string sequence

(~ 3 minutes)

DS + A
======

Legend
======
P = Pied Piper
O~ = Rat moving left
~O = Rat moving right
" " = Empty space


String paints a picture of Hamelin

P O~ O~ ~O
2 rats following, 1 rat deaf

~O P O~ ~O
2 rats following 1 rat deaf


There may not always be space separation between the piper and the rats
    PO~O~

We need a regex that can delimit rats 

/~O|O~|P/


Array
=====
Array will be filled with rats and piper in a set order

Rats will have two possible values:
- R right 
- L left
(may not need to recode)

[R, R, P, L, L] = All the rats are following the pied piper

For each rat, we make sure

5 minutes on DS

Alg
====
countDeafRats (town)

- Convert string to an array:
  - Match on regex pattern /~O|O~|P/g
    - This will remove whitespaces, and preserve order
-=> Initialize the array to var townArray

- Declare deafRats initialize to 0

- Find the piper (getIndex of P in the townArray)
-=> Initialize to var piperPlace

- Iterate over element in townArray, with index
  - If the element is the piper, continue
  - Otherwise, it's a rat. Which way is it moving?
    - if ~O (right moving rat)
      - Is its index > the piperPlace? (is it deaf?)
        - Yes: Increment deafRats by 1

    - if O~ (left moving rat)
      - Is its index < the piperPlace? (is it deaf?)
        - Yes: Increment deafRats by 1

- Return deafRats

[6 minutes on alg]
*/

function countDeafRats(town) {
  let townArray = town.match(/~O|O~|P/g);
  let deafRats = 0;

  let piperPlace = townArray.indexOf('P');

  townArray.forEach((element, idx) => {
    if (idx === piperPlace) return;

    else if (element === '~O') {
      if (idx > piperPlace) deafRats += 1;
    } else { // left moving rat O~
      if (idx < piperPlace) deafRats += 1;
    }
  })

  return deafRats;
}


console.log(countDeafRats("~O~O~O~O P")) //, 0);
console.log(countDeafRats("P O~ O~ ~O O~")) //, 1);
console.log(countDeafRats("~O~O~O~OP~O~OO~")) //, 2);

// [6 minutes on code]