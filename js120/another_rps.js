

let readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log(`Please choose rock, paper, or scissors`);
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('sorry invalid choice');
      }

      this.move = choice;

    }
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {
    move: null,

    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];

    }
  };
  return Object.assign(playerObject, computerObject);

}

let RPSgame = {
  human: createHuman(),
  computer: createComputer(),
  score: { human: 0, computer: 0 },

  displayWelcomeMessage() {
    console.log(`Welcome to rock paper scissors`);
  },

  displayGoodbyeMessage() {
    console.log(`thanks for playing`);
  },

  setWinner() {

  },

  determineWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
      this.score.human += 1;
      return 'human';

    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
      (humanMove === 'paper' && computerMove === 'scissors') ||
      (humanMove === 'scissors' && computerMove === 'rock')) {
      this.score.computer += 1;
      return 'computer'

    } else {
      return 'tie'
    }
  },

  isSetOver() {
    return Object.values(this.score).some(points => points >= 3);
  },

  displaySetWinner() {
    let winner = Object.keys(this.score).find(function(player) {
     let pointValue = this.score[player];
     return pointValue >= 3;
    }, this)

    return winner;
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let winner = this.determineWinner();
    
    console.log(`you chose ${humanMove}`);
    console.log(`computer chose ${computerMove}`);

    switch (winner) {
      case 'human':
        console.log(`human won`);
        break;
      case 'computer':
        console.log(`computer won`);
        break;
      default:
        console.log(`it's a tie`);
        break;
    }
    console.log(`The score is:`);
    console.log(`   Human: ${this.score.human}`);
    console.log(`   Computer: ${this.score.computer}`);
  },

  playAgain() {
    let choice;
    while (true) {
      console.log('Play again? (enter y or n)');
      choice = readline.question();
      if (['y', 'n'].includes(choice)) break;
      console.log('invalid response');
    }

    return choice === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      console.log(`this.isSetOver(): `, this.isSetOver())
      console.log(`this.displaySetWinner(): `, this.displaySetWinner())
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }
};

RPSgame.play();