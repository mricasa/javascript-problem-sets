class Diamond {
  static ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  static ODD_NUMBERS = (function () {
    let odds = [];
    for (let num = 1; odds.length < 26; num += 2) {
      odds.push(num);
    }
    return odds;
  })();

  static makeDiamond(letter) {
    let letterRowIdx = Diamond.ALPHABET.indexOf(letter);
    let maxWidth = Diamond.ODD_NUMBERS[letterRowIdx];
    let result = "";

    for (let row = 0; row <= letterRowIdx; row++) {
      if (row === 0) {
        result = result.concat(Diamond.renderFirstLast(maxWidth));
      } else {
        result = result.concat(Diamond.renderRow(row, maxWidth));
      }
    }

    let arr = result.split('\n');
    
    for (let idx = arr.length - 3; idx >= 0 ;idx--) {
      result = result.concat(`${arr[idx]}\n`);
    }
  
    return result;
  }

  static renderRow(nRow, maxWidth) {
    let drawnSpace = Diamond.ODD_NUMBERS[nRow];
    let letter = Diamond.ALPHABET[nRow];
    let boundary = (maxWidth - drawnSpace) / 2;
    let separation = nRow === 0 ? 0 : drawnSpace - 2;

    let result = `${" ".repeat(boundary)}${letter}${" ".repeat(separation)}${letter}${" ".repeat(boundary)}\n`

    return result;
  }

  static renderFirstLast(maxWidth) {
    let boundary = (maxWidth - 1) / 2;
    let result = `${" ".repeat(boundary)}A${" ".repeat(boundary)}\n`

    return result;
  }
}

let test = function (letter) {
  return Diamond.makeDiamond(letter)
};


module.exports = Diamond;