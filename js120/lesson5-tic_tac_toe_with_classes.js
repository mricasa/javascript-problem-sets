

const readline = require('readline-sync');


class Square {
  constructor(marker = Square.EMPTY_SQUARE) {
    this.marker = marker;
  }

  isEmpty() {
    return this.readSquare() === " ";
  }

  readSquare() {
    return this.marker;
  }

  update(marker) {
    this.marker = marker;
  }

  resetSquare() {
    this.marker = Square.EMPTY_SQUARE;
  }
  toString() {
    return this.readSquare();
  }

  static EMPTY_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = "O";
}

class Board {
  constructor() {
    this.grid = {};

    for (let counter = 1; counter <= 9; counter++) {
      this.grid[counter] = new Square();
    }
  }


  display() {
    console.log('');
    console.log(`     |     |  `);
    console.log(`  ${this.grid[1]}  |  ${this.grid[2]}  |  ${this.grid[3]}`);
    console.log(`     |     |  `);
    console.log(`-----+-----+-----`);
    console.log(`     |     |  `);
    console.log(`  ${this.grid[4]}  |  ${this.grid[5]}  |  ${this.grid[6]}`);
    console.log(`     |     |  `);
    console.log(`-----+-----+-----`);
    console.log(`     |     |  `);
    console.log(`  ${this.grid[7]}  |  ${this.grid[8]}  |  ${this.grid[9]}`);
    console.log(`     |     |  `);

  }


  squareAt(coord) {
    return this.grid[coord].readSquare();
  }

  placeMarker(coord, marker) {
    this.grid[coord].update(marker);
  }

  emptySquares() {
    return Object.keys(this.grid).filter(coord => {
      return this.grid[coord].isEmpty();
    });
  }

  isFull() {
    return this.emptySquares().length === 0;
  }
}

class Player {
  constructor() {
    this.marker = null;
    this.lastMove = null;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super();
    this.marker = Square.HUMAN_MARKER;
  }

}

class Computer extends Player {
  constructor() {
    super();
    this.marker = Square.COMPUTER_MARKER;
  }

}

class TTTgame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  static WINNING_LINES = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]


  displayWelcome() {
    console.log(`Welcome to Tic Tac Toe`);
  }

  humanMove() {
    let choice = null;

    while (true) {
      let options = this.board.emptySquares();
      console.log(`Choose a square: ${options}`);
      choice = readline.question();

      if (options.includes(choice)) break;

      console.log(`Sorry invalid choice.`);
    }

    this.board.placeMarker(choice, this.human.getMarker());

  }

  computerMove() {
    let options = this.board.emptySquares();
    let choice = options[Math.floor(Math.random() * options.length)];
    this.board.placeMarker(choice, this.computer.getMarker());
  }

  isGameOver() {
    return (this.board.isFull() ||
      this.isWinner(this.human.getMarker()) ||
      this.isWinner(this.computer.getMarker()));
  }

  isWinner(marker) {
    return TTTgame.WINNING_LINES.some(combo => {
      return combo.every(square => {
        return this.board.squareAt(square) === marker;
      });
    });
  }

  displayResult() {
    if (this.isWinner(this.human.getMarker())) {
      console.log('you won');
    } else if (this.isWinner(this.computer.getMarker())) {
      console.log('computer won');
    } else {
      console.log('it was a tie');
    }
  }

  displayGoodbye() {
    console.log(`Thanks for playing`);
  }

  play() {
    this.displayWelcome();

    while (true) {
      this.board.display();
      this.humanMove();
      if (this.isGameOver()) break;
      this.computerMove();
      if (this.isGameOver()) break;
    }

    this.board.display();
    this.displayResult();
    this.displayGoodbye();
  }
}

let game = new TTTgame();
game.play();

