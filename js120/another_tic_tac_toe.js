const readline = require('readline-sync');

class Participant {
  constructor() {

  }
}

class Human {
  constructor() {

  }
}

class Computer {
  constructor() {

  }
}

class Board {
  constructor() {
    this.grid = this.initializeBoard();
    console.log(this.grid)
  }

  initializeBoard() {
    let grid = {};
    for (let key = 1; key <= 9; key++) {
      grid[key] = new Square();
    };
    return grid;
  }

  isFull() {
    let spaces = Object.keys(this.grid);
    return spaces.every(space => {
      return !(this.grid[space].isEmpty());
    })
  }

  emptySquares() {
    let spaces = Object.keys(this.grid);
    return spaces.reduce((arr, key) => {
      if (this.grid[key].isEmpty()) {
        return arr.concat(key);
      } else {
        return arr;
      }
    }, [])
  }

  placeMarker(marker, location) {
    this.grid[location].updateMarker(marker);
  }

  valueOfSpace(position) {
    return this.grid[position].valueOf();
  }

  displayBoard() {
    console.log(`     |     |     `)
    console.log(`  ${this.grid[1]}  |  ${this.grid[2]}  |  ${this.grid[3]}  `)
    console.log(`     |     |     `)
    console.log(`-----+-----+-----`)
    console.log(`     |     |     `)
    console.log(`  ${this.grid[4]}  |  ${this.grid[5]}  |  ${this.grid[6]}  `)
    console.log(`     |     |     `)
    console.log(`-----+-----+-----`)
    console.log(`     |     |     `)
    console.log(`  ${this.grid[7]}  |  ${this.grid[8]}  |  ${this.grid[9]}  `)
    console.log(`     |     |     `)
  }
}

class Square {
  constructor() {
    this.space = Square.EMPTY_MARKER;
  }

  toString() {
    if (this.isEmpty()) return ' ';
    return this.valueOf();
  }

  valueOf() {
    return this.space;
  }

  updateMarker(marker) {
    this.space = marker;
  }

  isEmpty() {
    return this.space === Square.EMPTY_MARKER;
  }

  static EMPTY_MARKER = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';
}

class Scores {

}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.scores = new Scores();
  }

  displayWelcome() {
    console.log(`Welcome to tic tac toe`);
  }

  displayGoodBye() {
    console.log('thanks for playing');
  }

  playerTurn() {
    console.log('Select a square...')
    console.log(`current empty squares: ${this.board.emptySquares()}`)
    let response;
    while (true) {
      response = readline.question();
      if (this.board.emptySquares().includes(response)) break;
      console.log(`sorry... invalid response`)
    }
    this.board.placeMarker(Square.HUMAN_MARKER, response);
  }

  computerTurn() {
    //STUB
    // need to incorporate smart moves...
    if (!(this.isGameOver())) {
      let options = this.board.emptySquares();
      let randomResponse = options[Math.floor(Math.random() * options.length)];
      this.board.placeMarker(Square.COMPUTER_MARKER, randomResponse)
    }
  }

  whoWon() {
    function completedLine(line, marker) {
      return line.every(position => {
        return this.board.valueOfSpace(position) === marker;
      })
    }

    for (let line of TTTGame.WINNING_LINES) {
      if (completedLine.call(this, line, Square.HUMAN_MARKER) ) return 'player';
      else if (completedLine.call(this, line, Square.COMPUTER_MARKER)) return 'computer';
    }
  }

  displayResult() {
    let winner = this.whoWon() || 'cat';
    console.log(`${winner} is the winner`);
  }

  isGameOver() {
    console.log(`this.board.isFull() ?? `, this.board.isFull());
    return this.board.isFull() || this.whoWon();
  }

  play() {
    this.displayWelcome();
    while (true) {
      this.board.displayBoard();
      this.playerTurn();
      if (this.isGameOver())  break;
      this.computerTurn();
      if (this.isGameOver())  break;
    }
    this.board.displayBoard();
    this.displayResult();
    this.displayGoodBye();
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
  ];
}

let game = new TTTGame();
game.play()