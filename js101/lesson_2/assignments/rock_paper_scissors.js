///////////////////////////////////////////////////////////////////////////////
/*
Rock, Paper, Scissors

==Rules==
1. If player a chooses rock, and player b chooses scissors, player a wins
2. If player a chooses paper, and player b chooses rock, player a wins
3. If player a choose scissors, and player b chooses paper, player a wins
4. If both players choose the same item, neither win. It's a tie.

==Flow==/
1. The user makes a choice
2. The computer makes a choice
3. The winner is displayed

*/
//////////////////////////////////////////////////////////////////////////////

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')
  ) {
    prompt('Computer wins!');
  } else {
    prompt('It was a tie!');
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You choose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt(`Would you like to play again? y or n`);
  let answer = readline.question().toLowerCase();

  while (!['y', 'n'].includes(answer[0])) {
    prompt('Please enter: "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}