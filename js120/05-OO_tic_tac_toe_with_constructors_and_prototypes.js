let readline = require("readline-sync"); // first line in ttt.js

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

function Square(marker = Square.UNUSED_MARKER) {
  this.marker = marker;
}

Square.UNUSED_MARKER = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = "O"

Square.prototype = {
  setMarker(marker) {
    this.marker = marker;
  },
  getMarker() {
    return this.marker;
  },

  isUnused() {
    return this.marker === Square.UNUSED_MARKER;
  },

  toString() {
    return this.marker;
  }

};


function Board() {
  this.grid = {};
  for (let idx = 1; idx <= 9; idx++) {
    this.grid[idx] = new Square();
  }
}

Board.prototype = {
  display() {
    console.log();
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
    console.log();
  },

  availableSquares() {
    let keys = Object.keys(this.grid);
    return keys.filter(key => {
      return this.grid[key].isUnused();
    })
  },

  setMarker(space, playerMarker) {
    this.grid[space].setMarker(playerMarker);
  },

  fullBoard() {
    return this.availableSquares().length === 0;
  },

  countMarkers(row, playerMarker) {
    return row.reduce((count, space) => {
      if (this.grid[space].getMarker() === playerMarker) {
        return count + 1;
      }
      return count;
    }, 0)
  }
}

function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  return this.marker;
}

function Human() {
  Player.call(this, Square.HUMAN_MARKER);
}
Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

function Computer() {
  Player.call(this, Square.COMPUTER_MARKER);
}
Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

function TTTGame() {
  this.board = new Board();
  this.computer = new Computer();
  this.human = new Human();
}

TTTGame.WINNING_LINES = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['3', '5', '7']
];

TTTGame.prototype = {
  displayWelcome() {
    console.log(` welcome to tic tac toe`)

  },

  displayGoodbye() {
    console.log(` good bye `)

  },

  playerMove() {
    let choice;
    let validMoves = this.board.availableSquares();
    while (true) {
      console.log(`Choose among ${validMoves}`);
      choice = readline.question();
      if (validMoves.includes(choice)) {
        break;
      }
      console.log(` not a valid move`)
    }

    this.board.setMarker(choice, this.human.getMarker())

  },

  computerMove() {
    let choice;
    let validMoves = this.board.availableSquares();
    while (true) {
      choice = (Math.floor(Math.random() * 9) + 1).toString();
      if (validMoves.includes(choice)) {
        break;
      }
    }

    this.board.setMarker(choice, this.computer.getMarker());

  },

  isGameover() {
    return this.board.fullBoard() || this.isWinner(this.human) ||
      this.isWinner(this.computer);
  },

  isWinner(player) {
    return TTTGame.WINNING_LINES.some((sequence) => {
      return this.board.countMarkers(sequence, player.getMarker()) === 3;
    })
  },

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log(` human won`)
    } else if (this.isWinner(this.computer)) {
      console.log (` computer won`)
    } else {
      console.log(`tie`)
    }
  },



  play() {
    this.displayWelcome();

    while (true) {
      this.board.display();
      this.playerMove();
      if (this.isGameover()) break;
      this.computerMove();
      if (this.isGameover()) break;
    }

    this.board.display();
    this.displayResults();
    this.displayGoodbye();
  },
}

let newGame = new TTTGame();
newGame.play();