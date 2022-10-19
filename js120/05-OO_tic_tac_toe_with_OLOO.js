let readline = require("readline-sync"); // first line in ttt.js
// This is incomplete. Got so bored.
/*
Text Description
- Tic Tac Toe is a 2-player board game
- The game is played on a 3x3 grid
- Players take turns marking a square with a marker
- Traditionally the first player to go first uses X, then second uses O
- The first player to mark 3 squares in a row with their marker wins the game
- A row can be horizontal, vertical, or diagonal
- There is one human player and one computer
- The human always moves first

Nouns: board, grid, square, players, game, marker, row, human, computer
Verb: play, mark, win, move, place

- Game
- Board
- Row
- Square
- Marker
- Player
  - Mark (v)
  - Play (v)
  - Human (n)
  - Computer (n)

*/

let Square = {
  UNUSED_SQUARE:   "•",
  HUMAN_MARKER:    "X",
  COMPUTER_MARKER: "O",

  init(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
    return this;
  },

  toString() {
    return this.marker;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  },

  getMarker() {
    return this.marker;
  },
};

let Board = {
  init() {
    this.grid = {}
    for (let idx = 1; idx <= 9; idx++) {
      this.grid[idx] = Object.create(Square).init();
    }
    return this;
  },
  display() {
    console.log(`     |     |   `);
    console.log(`  ${this.grid['1']}  |  ${this.grid['2']}  |  ${this.grid['3']}`);
    console.log(`     |     |   `);
    console.log(`-----+-----+-----`);
    console.log(`     |     |   `);
    console.log(`  ${this.grid['4']}  |  ${this.grid['5']}  |  ${this.grid['6']}`);
    console.log(`     |     |   `);
    console.log(`-----+-----+-----`);
    console.log(`     |     |   `);
    console.log(`  ${this.grid['7']}  |  ${this.grid['8']}  |  ${this.grid['9']}`);
    console.log(`     |     |   `);
  }
}

let Player = {
  initialize(marker) {
    this.marker = marker;
    return this;
  },

  getMarker() {
    return this.marker;
  }
}
let Human = Object.create(Player);
Human.init = function() {
  return this.initialize(Square.HUMAN_MARKER);
}

let Computer = Object.create(Player);
Computer.init = function() {
  return this.initialize(Square.COMPUTER_MARKER);
};

let TTTGame = { // 🕹
  init() {
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    this.board = Object.create(Board).init();
    this.name = 'Tic Tac Toe';
    return this;
  },

  displayWelcome() {
    console.log(`welcome`)
  },
  
  displayGoodbye() {

  },

  isGameOver() {
    return false;
  },

  playerMove() {

  },

  computerMove() {

  },


  play() {
    this.displayWelcome();

    while (true) {
      this.board.display();

      this.playerMove();
      if (this.isGameOver()) break;

      this.computerMove();
      if (this.isGameOver()) break;
      break;
    }


   // this.board.display();
    this.displayResults();
    this.displayGoodbye();
  },

  displayResults() {

  },
  
}

let newGame = Object.create(TTTGame).init();
newGame.play();