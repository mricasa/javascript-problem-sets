class BeerSong {

  static verse(nBottles) {
    switch (nBottles) {
      case 1:
        return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
          "Take it down and pass it around, no more bottles of beer on the wall.\n";
      case 0:
        return "No more bottles of beer on the wall, no more bottles of beer.\n" +
          "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
      default:
        return `${nBottles} bottles of beer on the wall, ${nBottles} bottles of beer.\n` +
          `Take one down and pass it around, ${nBottles - 1} ` +
          `bottle${nBottles !== 2 ? 's' : ''} of beer ` +
          `on the wall.\n`;
    }
  }
  static verses(start, end) {
    let verses = BeerSong.verse(start);
    let nBottle = start - 1;

    do {
      verses = verses.concat(`\n${BeerSong.verse(nBottle)}`);
      nBottle--;
    } while (nBottle >= end);

    return verses;
  }
  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;