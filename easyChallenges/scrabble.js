
class Scrabble {
  constructor(word) {
    this.word = word;
    this.tiles = this.convertToTiles(word);
  }

  convertToTiles(word) {
    if (typeof word !== 'string') return [];
    return word.toUpperCase().match(/[a-z]/ig) || [];
  }

  score() {
    return this.tiles.reduce((sum, tile) => {
      return sum + Scrabble.TILE_VALUES[tile];
    }, 0);
  }
}

Scrabble.score = function(word) {
  return new Scrabble(word).score();
}

Scrabble.TILE_VALUES = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10,
}

module.exports = Scrabble;