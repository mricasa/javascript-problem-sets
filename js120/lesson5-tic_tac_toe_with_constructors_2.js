const readline = require('readline-sync');

function Square(marker = Square.EMPTY_SQUARE) {
  this.marker = marker;
}
Square.EMPTY_SQUARE = ' ';
Square.HUMAN_MARKER = 'X';
Square.COMPUTER_MARKER = 'O';

Square.prototype.getMarker = function () {
  return this.marker;
};

Square.prototype.isEmpty = function () {
  return this.getMarker() === Square.EMPTY_SQUARE;
}

Square.prototype.setMarker = function (marker) {
  this.marker = marker;
}

Square.prototype.toString = function () {
  return this.getMarker();
}

function Board() {
  this.grid = {};
  for (let counter = 1; counter <= 9; counter++) {
    this.grid[counter] = new Square();
  }
}

Board.prototype.display = function () {
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

Board.prototype.squareAt = function (coord) {
  return this.grid[coord].getMarker();
}

Board.prototype.placeMarker = function (coord, marker) {
  this.grid[coord].setMarker(marker);
}

Board.prototype.emptySquares = function () {
  return Object.keys(this.grid).filter(coord => {
    return this.grid[coord].isEmpty();
  })
}

Board.prototype.isFull = function () {
  return this.emptySquares().length === 0;
}

function Player(marker = null) {
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  return this.marker;
}

function Human() {
  Player.call(this, Square.HUMAN_MARKER)
}
Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

function Computer() {
  Player.call(this, Square.COMPUTER_MARKER)
}
Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

function TTTGame() {
  this.board = new Board;
  this.human = new Human;
  this.computer = new Computer;
}

TTTGame.WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

TTTGame.prototype.displayWelcome = function () {
  console.log("Welcome to Tic Tac Toe");
}

TTTGame.prototype.humanMove = function () {
  let choice = null;

  while (true) {
    let options = this.board.emptySquares();
    console.log(`Choose a square: ${options}`);
    choice = readline.question();

    if (options.includes(choice)) break;

    console.log("Sorry, invalid choice");
  }

  this.board.placeMarker(choice, this.human.getMarker());
}

TTTGame.prototype.computerMove = function () {
  let options = this.board.emptySquares();
  let choice = options[Math.floor(Math.random() * options.length)];
  this.board.placeMarker(choice, this.computer.getMarker());
}

TTTGame.prototype.isGameOver = function () {
  return (this.board.isFull()) || this.isWinner(this.human.getMarker()) ||
    this.isWinner(this.computer.getMarker());
}

TTTGame.prototype.isWinner = function (marker) {
  return TTTGame.WINNING_LINES.some(combo => {
    return combo.every(square => {
      return this.board.squareAt(square) === marker;
    })
  })
}

TTTGame.prototype.displayResult = function () {
  if (this.isWinner(this.human.getMarker())) {
    console.log('you won');
  } else if (this.isWinner(this.computer.getMarker())) {
    console.log('computer won');
  } else {
    console.log('it was a tie');
  }
}

TTTGame.prototype.displayGoodbye = function () {
  console.log(`Thanks for playing`);

}

TTTGame.prototype.play = function () {
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

let game = new TTTGame();
game.play()