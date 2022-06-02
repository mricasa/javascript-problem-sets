// Most frequently used words in a text
// 4 kyu

/**
 * Input: String
 * Output: Array
 *
 * Explicit requirements:
 * - Result is the top three words in descending order
 * - Word is a string of letters (A-Z)
 * - Word can have apostrophes
 *    Apostrophes can be anywhere in the word
 *      ('abc, abc' a'bc are all words)
 * - All other characters should be treated as whitespace
 * - Match is case-insensitive
 * - Result should contain lowercased words
 * - Ties can be broken arbitrarily
 * - If < 3 unique words, return the top two words or top 1 word
 * - Return an empty array if a text contains no words
 * 
 * Implicit requirements:
 * - Empty string => empty array
 * - We won't need to deal with invalid args
 * - A single or series of apostrophes without letters is not a word.
 * - A single character is a word
 * - if a special character occurs in the middle of a word, the substituted whitespace DOES demarcate two words
 */


/** 
 * DC+A
 *
 * Aa Aa Aa aa b aa => [aa, b]
 * won't appl3$#e e e won't => [e, won't, app13]
 *  ' => []
 * ... => []
 * 
 * 
 * DC + A
 *
 * TOPTHREEWORDS
 * Given a string
 * Declare countDict and intialize to an empty object
 * Reassign the string to the following result:
 *    New string substituting out special characters with white space
 *
 * Separate the string into an array of words
 * Iterate over the words
 *  - Lowercase the word
 *  - If the word is a key in countDict, increment its value by 1
 *  - If it's not in countDict, create key for the current word and assign it a value of 1
 * END after all words are iterated
 *
 * (Find and sort the words)
 * Declare an array, initialized to an array of keys from the countDict
 * Sort the keys array
 *  - Per iteration, reference countDict for the value of the current key
 *  - Sort the array of keys by those values (the count), descending
 * END
 * return a slice the first 3 elements of they key array
 *
 * Subproc: CONVERT SYMBOLS TO WHITESPACE (treat special chars EXCEPT ' as whitespace)
 * - Replace all symbols EXCEPT apostrophe in the string with whitespace (space)
 * - /[^a-z']/gi
 * 
 * Subproc: Is it a valid word? (are there letters in the word, and no numbers)
 * - If the there are no letters inside the word, it's not a word.
 * - /[a-z]/i
 */

 function topThreeWords(words) {
  let countDict = {};
  let cleanedString = replaceSpecials(words);

  let wordArray = cleanedString.split(" ");

  wordArray.forEach(word => {
    let currentWord = word.toLowerCase();
    if (!validWord(currentWord)) return;
    
    countDict[currentWord] = countDict[currentWord] || 0;
    countDict[currentWord] += 1;
  })

  let wordKeys = Object.keys(countDict);

  wordKeys.sort((a, b) => {
    let countA = countDict[a];
    let countB = countDict[b];
    return countB - countA;
  })

  return wordKeys.slice(0, 3);
}

function replaceSpecials(string) {
  return string.replace(/[^a-z']/ig, " "); 
}

function validWord(word) {
  return /[a-z]/i.test(word);
}


//  console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // ['e','ddd','aa']

//  console.log(topThreeWords("  //wont won't won't")); // ["won't", "wont"]
   
// console.log(topThreeWords("  , e   .. "));
 
// console.log(topThreeWords("  ...  "));
 
// console.log(topThreeWords("  '  "))

 console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
 mind, there lived not long since one of those gentlemen that keep a lance
 in the lance-rack, an old buckler, a lean hack, and a greyhound for
 coursing. An olla of rather more beef than mutton, a salad on most
 nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
 on Sundays, made away with three-quarters of his income.`));
 // ['a','of','on']
 