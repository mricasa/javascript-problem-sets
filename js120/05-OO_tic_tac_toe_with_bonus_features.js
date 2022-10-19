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

class Board {
  static WINNING_LINES = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
  ];

  constructor() {
    this.reset();
  }
  
  reset() {
    this.grid = {};
    for (let idx = 1; idx <= 9; idx++) {
      this.grid[idx] = new Square();
    }
  }

  display() {
    console.log('')
    console.log(`${this.legend('1')}    |${this.legend('2')}    |${this.legend('3')}  `);
    console.log(`  ${this.grid['1']}  |  ${this.grid['2']}  |  ${this.grid['3']}`);
    console.log(`     |     |   `);
    console.log(`-----+-----+-----`);
    console.log(`${this.legend('4')}    |${this.legend('5')}    |${this.legend('6')}  `);
    console.log(`  ${this.grid['4']}  |  ${this.grid['5']}  |  ${this.grid['6']}`);
    console.log(`     |     |   `);
    console.log(`-----+-----+-----`);
    console.log(`${this.legend('7')}    |${this.legend('8')}    |${this.legend('9')}  `);
    console.log(`  ${this.grid['7']}  |  ${this.grid['8']}  |  ${this.grid['9']}`);
    console.log(`     |     |   `);
    console.log();
  }

  legend(key) {
    if (this.grid[key].isEmpty()) {
      return String.fromCharCode(key.charCodeAt() + 8272);
    } else {
      return " ";
    }
  }

  availableSquares() {
    let keys = Object.keys(this.grid);
    return keys.filter(key => {
      return (this.grid[key]).isEmpty();
    });
  }

  setMarker(choice, player) {
    this.grid[choice].setMarker(player);
  }

  isFull() {
    let keys = Object.keys(this.grid);
    return keys.every(key => {
      return !(this.grid[key].isEmpty());
    });
  }

  completedRow(marker) {
    return Board.WINNING_LINES.some(line => {
      return line.every(square => {
        return this.grid[square].getMarker() === marker;
      });
    });
  }
}

class Square {
  static INITIAL_MARKER = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O"
  constructor(marker = Square.INITIAL_MARKER) {
    this.marker = marker;
  }

  setMarker(marker = Square.INITIAL_MARKER) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  isEmpty() {
    return this.marker === Square.INITIAL_MARKER;
  }

  toString() {
    return String(this.marker);
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }
  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }

}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }


}

class TTTGame {
  constructor() {
    this.human = new Human();
    this.computer = new Computer();
    this.board = new Board();
  }

  displayWelcome() {
    console.clear();
    console.log('Welcome to tic tac toe');
  }

  displayGoodbye() {
    console.log(`thx for playing`);

  }

  displayResults() {
    if (this.determineWinner() === 1) {
      console.log(`you won`);
    } else if (this.determineWinner() === 2) {
      console.log(`the computer won`);
    } else {
      console.log(` cat won`);
    }
  }


  joinOr(arr, sep = ",", article = "or") {
    let result = '';
    arr.forEach((ele, idx) => {
      result = result.concat(String(ele));
      if (idx === arr.length - 1) {

      } else if (idx === arr.length - 2) {
        result = result.concat(sep, " ", article, " ");
      } else {
        result = result.concat(sep, " ");
      }
    });
    return result;
  }

  playerMove() {
    let availableSquares = this.board.availableSquares();
    let choice;

    while (true) {
      console.log(`Choose a square from ${this.joinOr(availableSquares)}`);
      choice = readline.question();
      if (availableSquares.includes(choice)) break;
      console.log(`sorry, invalid choice`);
    }

    this.board.setMarker(choice, this.human.getMarker());

  }


  computerMove() {
    let availableSquares = this.board.availableSquares();
    let choice;

    while (true) {
      choice = String((Math.floor(Math.random() * 9)) + 1);
      if (availableSquares.includes(choice)) break;
    }
    this.board.setMarker(choice, this.computer.getMarker());
  }

  isGameOver() {
    return this.board.isFull() || this.determineWinner();
  }
  determineWinner() {
    if (this.board.completedRow(this.human.getMarker())) {
      return 1;
    } else if (this.board.completedRow(this.computer.getMarker())) {
      return 2;
    } else {
      return 0;
    }
  }


  playAgain() {
    let choice;
    while (true) {
      console.log(`would you like to play again (y / n)`);
      choice = readline.question();
      if (['y', 'n'].includes(choice)) break;
      console.log(`invalid choice`);
    }
    return choice === 'y';
  }

  play() {
    this.displayWelcome();
    while (true) {
      this.playOneGame();
      if (!this.playAgain()) break;

      console.log(`Let's play again`);
    }
    this.displayGoodbye();
  }

  playOneGame() {
    this.board.reset();

    while (true) {
      this.board.display();

      this.playerMove();
      if (this.isGameOver()) break;

      this.computerMove();
      if (this.isGameOver()) break;

    }

    this.board.display();
    this.displayResults();
  }
}

let currentGame = new TTTGame();

currentGame.play();