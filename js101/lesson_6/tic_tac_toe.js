// tic_tac_toe.js


let readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const SCOREBOARD = {'player': 0, 'computer': 0}
let FIRST_MOVER = 'choice'; // 'player', 'computer', or 'choice'

function prompt(message) {
  console.log(`==> ${message}`);
}

function resetScores() {
  SCOREBOARD.player = 0;
  SCOREBOARD.computer = 0
}

function initializeBoard() {
  let board = {};
  for (space = 1; space <= 9; space ++) {
    board[String(space)] = INITIAL_MARKER;
  }
  return board;
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`)
  console.log(`You have ${SCOREBOARD.player} points. The computer has ${SCOREBOARD.computer} points.`)
  console.log(" ");
  console.log(" ".repeat(5) + "|" + " ".repeat(5) + "|" +" ".repeat(5));
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log(" ".repeat(5) + "|" + " ".repeat(5) + "|" +" ".repeat(5));
  console.log("-----+-----+-----");
  console.log(" ".repeat(5) + "|" + " ".repeat(5) + "|" +" ".repeat(5));
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log(" ".repeat(5) + "|" + " ".repeat(5) + "|" +" ".repeat(5));
  console.log("-----+-----+-----");
  console.log(" ".repeat(5) + "|" + " ".repeat(5) + "|" +" ".repeat(5));
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log(" ".repeat(5) + "|" + " ".repeat(5) + "|" +" ".repeat(5));
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`)
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;
    displayBoard(board);
    prompt('That is not a valid choice')
  }

  board[square] = HUMAN_MARKER;
}

// =====================
// COMPUTER AI Functions
// =====================

function computerChoosesSquare(board) {
  let square;

  // offense

  if (board['5'] === INITIAL_MARKER) {
    square = 5;
  };

  if (!square) {
    for (let idx = 0; idx < WINNING_LINES.length; idx++) {
      let line = WINNING_LINES[idx];

      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }
  
  // defense
  if (!square) {
    for (let idx = 0; idx < WINNING_LINES.length; idx++) {
      let line = WINNING_LINES[idx];
      square = findAtRiskSquare(line, board);
      if (square) break;
    }
  }

  // random
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

// function findThreat(board) {

// The way this function is laid out always results in the computer
// Prioritizing defensive moves. Why?
// Is there fall through to the next conditional branch?
// -- no, only one clause was activated.
// Does the iteration keep continuing even if the move is found?
// -- it should not, because of the explicit return.
// Maybe it's that we are parsing through the winning lines in a set order
// each time.... Maybe it's that while a game winning offensive move is in
// a line with a greater index, the smaller index line would be seen first
// and if that smaller index line is a defensive move, it would take that
// ..... i am 95% sure it is that.
// I wonder if we could have used PEDAC here.. (because you did not use
// PEDAC at all )
// See the LS computerChoosesSquare function for an explicit way to
// fork different options....
//
//   for (let idx = 0; idx < WINNING_LINES.length; idx++) {
//     let line = WINNING_LINES[idx];
//     // offensive
//     if (!!findAtRiskSquare(line, board, COMPUTER_MARKER)) {
//       return findAtRiskSquare(line, board, COMPUTER_MARKER);
  
//     // defensive
//     } else if (!!findAtRiskSquare(line, board)) {
//        return findAtRiskSquare(line, board);
//     }
//   }
//   return null;
// }

function findAtRiskSquare(line, board, player = HUMAN_MARKER) { 

  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === player).length === 2) {
    let unusedSquare = line.find(square => board[square] === ' ');
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

//===========
// Turn order
//===========
function chooseOrder() {
  console.clear();
  
  let response;

  while (true) {
    prompt("What player should move first?");
    prompt("1 = player || 2 = computer")
    response = readline.question();
    if (['1', '2'].includes(response)) break;
    prompt("That's not a valid response")
  }

  prompt(
    response === "1" ? "Player will move first":
    "Computer will move first"
  );

  prompt("Press any key to continue");
  readline.question();

  return response === "1" ? 'player': 'computer';
}

function choooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  }
  else if (currentPlayer === 'computer') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

//============================
// Game end and win conditions
//============================
function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    debugger; 

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
return null
}

function joinOr(arr, delimiter = ', ', article = 'or') {
  let part1 = arr.slice(0, -1).join(delimiter);
  if (arr.length <= 2) {
    return arr.join(article + ' ');
  }
  return part1 + delimiter + article + " " + arr.slice(-1).shift();
}

function tallyScores(board) {
  switch (detectWinner(board)) {
    case 'Player': SCOREBOARD.player += 1; break;
    case 'Computer': SCOREBOARD.computer += 1;
  }
}


//===============
// Main game loop
//===============
while(true) {
  
  resetScores(); 
  if (FIRST_MOVER === 'choice') {
    currentPlayer = chooseOrder();
  } else {
    currentPlayer = FIRST_MOVER;
  }

  
  while (true) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);
      choooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      displayBoard(board);
      if ((someoneWon(board)) || boardFull(board)) break;
    }

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`)
    } else {
      prompt('It was a tie')
    };
    tallyScores(board);
    console.log("Press any key to continue");
    readline.question();

    if (SCOREBOARD.player === 3 || SCOREBOARD.computer === 3) break;
  }

  console.log(`The final scores was ${SCOREBOARD.player}-${SCOREBOARD.computer}`)
  console.log(SCOREBOARD.player === 3 ? "You won!" : "You lost.");

  let response;
  while(true) {
    console.log('Would you like to play again? (y or n)');
    response = readline.question();
    if (['y', 'n'].includes(response)) break;

    prompt('Not a valid response')
  }
  if (response === 'n') {prompt('Thanks for playing!'); break;}
}
