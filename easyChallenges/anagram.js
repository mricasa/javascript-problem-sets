/* 
Requirements
- Take a keyword 
- Compare that word to a list of candidate words
- Return a list of words that are anagrams of our keyword

implicit req
- returned list of anagrams are alphabetized
- if no candidates are anagrams, return an empty list
- anagrams are case insensitive
- identical words are not anagrams
*/

class Anagram {
  constructor(keyword) {
    this.keyword = keyword;
  }

  match(candidates){ 
    return candidates.filter(candidate => {
      if (candidate.toLowerCase() === this.keyword.toLowerCase()) return false;
      return this.norm(candidate) === this.norm(this.keyword);
    })
  }

  norm(word) {
    return word.toLowerCase().split("").sort().join("");
  }
}
module.exports = Anagram;