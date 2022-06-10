// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.



/*
- Return an array of words from a string of words
- Sorting on the final character
- If the last character of the two words is the same, the word that appeared first in the array should come first

- Splitting string into an array of words
-call sort on the array of words passing each word
  - Declare variables last letter for each argument, and intialize to the last letter of each word
  - If a < b return -1
  - Else a > b return 1
  - Else (this is when a === b)
      numeric comparison of indexOf ()
        => return the difference
*/
function last(string) {
  let wordArr = string.split(" ");

  return wordArr.sort((a, b) => {
    let lastA = a[a.length - 1];
    let lastB = b[b.length - 1];

    if (lastA < lastB) {
      return -1;
    } else if (lastA > lastB) {
      return 1;
    } else {
      return wordArr.indexOf(a) - wordArr.indexOf(b);
    }
  })

}

console.log(last('man i need a taxi up to '))


