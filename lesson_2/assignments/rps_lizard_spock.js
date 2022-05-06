///////////////////////////////////////////////////////////////////////////////
/*
Rock, Paper, Scissors, Lizard Spock
*/
//////////////////////////////////////////////////////////////////////////////

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const CHOICE_KEY = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};

function translateChoice(choice) {
  return CHOICE_KEY[choice] || choice;
}

const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};

function detectWinner(choice, computerChoice) {
  if (WINNING_MOVES[choice].includes(computerChoice)) {
    return 1; // Player wins
  } else if (WINNING_MOVES[computerChoice].includes(choice)) {
    return -1; // Computer wins
  } else {
    return 0; // tie
  }
}

function displayWinner(choice, computerChoice) {
  switch (detectWinner(choice, computerChoice)) {
    case 1:
      prompt('You won\n');
      break;
    case -1:
      prompt('The computer won\n');
      break;
    default:
      prompt('It was a draw\n');
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

let scoreBoard;

function updateScore(choice, computerChoice) {
  switch (detectWinner(choice, computerChoice)) {
    case 1:
      scoreBoard.human += 1;
      break;
    case -1:
      scoreBoard.computer += 1;
      break;
    default:
      scoreBoard.ties += 1;
  }
}

function displayScore() {
  prompt(`Player points: ${scoreBoard.human}`);
  prompt(`CPU points:    ${scoreBoard.computer}`);
  prompt(`Ties:          ${scoreBoard.ties}\n`);
}

function displayBanner() {
  console.log("=".repeat(38));
  console.log(" Rock, Paper, Scissors, Lizard, Spock ");
  console.log("=".repeat(38));
}

while (true) {
  console.clear();

  scoreBoard = {
    human: 0,
    computer: 0,
    ties: 0
  };

  displayBanner();
  prompt(`The player who takes best of 5 rounds is the winner.`);
  while (scoreBoard.human !== 3 && scoreBoard.computer !== 3) {
    prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
    prompt(`Enter your choice or the choice code (${Object.keys(CHOICE_KEY).join(', ')})`);
    let choice = translateChoice(readline.question());


    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = translateChoice(readline.question());
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    console.clear();
    displayBanner();
    prompt(`You choose ${choice}, computer chose ${computerChoice}\n`);

    displayWinner(choice, computerChoice);
    updateScore(choice, computerChoice);
    displayScore();
  }

  prompt(scoreBoard.human === 3 ? 'You won the match!' : 'You lost the match');

  prompt(`Would you like to play again? y or n`);
  let answer = readline.question().toLowerCase();

  while (!['y', 'n'].includes(answer[0])) {
    prompt('Please enter: "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') {
    prompt('Thanks for playing! Closing the game...');
    break;
  }
}

