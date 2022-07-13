// Original advanced exercises vanished. welp.

///////////////////////////////////////////////////////////////////////////////
// Binary Search
///////////////////////////////////////////////////////////////////////////////

/**
 * Input: Sorted array
 * Output: index of the searched item
 *
 * Rules
 * =====
 * The input listed is sorted
 * Cut search area in half on each iteration by discarding the half that
 *   we know the search term does not exist in
 * Return the index of the searchItem if found.
 * Return -1 if the serarch item is not found
 *
 * Implicit: 
 * All items will be of the same type.
 * Non mutating or mutating ok
 *
 * DC + A
 * a
 * b
 * c
 * d
 * e
 * f
 * g
 * h
 * 
 * Find c
 * Half point is d (a b c)
 * Discard latter half (a b c)
 * half point (rounded down is b) (c d)
 * half point (rounded down is c)
 * Is the middle c?
 *    Yes,
 *    Stop
 *
 * 0 a
 * 1 b
 * 2 c
 * 3 d
 * 4 e
 * 5 f
 * 6 g
 * 7 h
 * Middle index is 3:
 
 * 0 a
 * 1 b
 * 2 c
 * 3 d
 * 
 * Middle index is 2
 * 2 c
 *
 * 
 *
 * We will need indices to stick as we mutate the list.
 * 2 layer nested array?
 * 
 * Given a sorted list and a search item ('string' or number)
 * Declare listCopy and transform it to a 2 layer nested array with subarr indx
 *  as element 0, and the values as element 1
 * Declare midValue idx, it computes as half the length of the current 
 *  list, rounded down
 *
 * Loop
 *    Reference the value at middle idx
 *    Is the middle idx the search term?
 *         If yes, return the hardcoded index (element 0)
 *    Is middle idx value greater than the search term?
 *         Scrap the right side, INCLUDING the middle value 
 *    Is middle idx value less than the search term?
 *         Scrap the left side of the list, including the middle value
 * Continue looping through the list until it is size of 1, and the item
 *  was not found
 * Return -1
 */


//  I liked the idea of "discarding" the part of the array I did not need, so I used splice to chop off half of the array after each iteration. The code does not mutate the original input array of course. 

//  Importantly, the solution works with a 2-level nested array that stores the original item indices of the input array (e.g., [ [0, 'Apple Store], [1, 'Bags Galore'] ] ... ) so that we can easily retrieve the correct index after we mutate the working array.

function binarySearch(array, item) {
  let arrCopy = array.map((element, idx) => [idx, element]);

  do {
    let midIndex = Math.floor(arrCopy.length / 2);
    let midItem =  arrCopy[midIndex][1];
    

    if (item === midItem) {
      return arrCopy[midIndex][0];

    } else if (item < midItem ) {
      arrCopy.splice(midIndex);

    } else if (item > midItem) {
      arrCopy.splice(0, midIndex + 1);
    }

  } while (arrCopy.length >= 1)

  return -1
}

let yellowPages = ['Apple Store','Bags Galore', 'Bike Store',
'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place',
'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
