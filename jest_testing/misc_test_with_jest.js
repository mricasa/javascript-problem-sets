/* 
    constructor
        save the argument in lowercase

    Method: match
        Initialize an empty list for the anagrams
        Iterate over each word in the argument list
            Convert word to lowercase
            Is word an anagram of the word saved in the constructor?
                Yes. Add this word to list of anagrams.
        Return the list of anagrams.

    Helper method to detect anagrams
        Takes two arguments: the original word and the current word
        Are the two words the same?
            Yes. Return false.
        Extract and sort all letters of the original word.
        Extract and sort all letters of the current word.
        Are the two sorted lists of letters the same?
            Yes. Return true (the words are anagrams)
            No. Return false (the words are not anagrams)
*/

class Anagram {
  constructor(word) {
    if (word === undefined) this.word === "";
    else this.word = word.toLowerCase();
  }

  match(words) {
    return words.filter(word => {
      if (word.toLowerCase() === this.word) return false;
      return word.toLowerCase().split("").sort().join("") ===
        this.word.split("").sort().join("")
    });
  }

  getWord() {
    return this.word;
  }
}


module.exports =  Anagram ;