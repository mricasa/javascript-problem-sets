let readline = require('readline-sync');

class Player {
  constructor() {
    this.move = null;
  }
}

class Computer extends Player {
  constructor() {
    super();
  }
  choose() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length)
    this.move = choices[randomIndex];
  }
}


class Human extends Player {
  constructor () {
    super();
  }
  choose() {
    let choice;

    while (true) {
      console.log('Please choose rock, paper, or scissors:');
      choice = readline.question();
      if (['rock', 'paper', 'scissors'].includes(choice)) break;
      console.log('sorry, invalid choice');
    }

    this.move = choice;
  }
}


class RPSgame {
  constructor() {
    this.human = new Human();
    this.computer = new Computer();
  }

  displayWelcomeMessage() {
    console.log('Welcome to rock paper scissors');
  }
  displayGoodbyeMessage() {
    console.log('thx for playing')
  }

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose ${humanMove}`);
    console.log(`The computer chose ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') || (humanMove === 'paper' && computerMove === 'rock') || (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('you won');
    } else if ((computerMove === 'rock' && humanMove === 'scissors') || (computerMove === 'paper' && humanMove === 'rock') || (computerMove === 'scissors' && humanMove === 'paper')) {
      console.log('you lost');
    } else {
      console.log("it was a tie");
    }
  }
  playAgain() {
    console.log('would you like to play again?');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y'

  }
  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }
}
let game = new RPSgame();

console.log(`Object.getPrototypeOf(game) === RPSgame.prototype: `, Object.getPrototypeOf(game) === RPSgame.prototype)
console.log(`'displayWinner' in RPSgame.prototype: `, 'displayWinner' in RPSgame.prototype)


game.play()