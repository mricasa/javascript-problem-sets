let readline = require('readline-sync');

function Player() {
  this.move = null;
}

function Computer() {
  Player.call(this);
}

Computer.prototype = Object.create(Player);
Computer.prototype.constructor = Computer;

Computer.prototype.choose = function () {
  const choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length)
  this.move = choices[randomIndex];
}

function Human() {
  Player.call(this)
}
Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

Human.prototype.choose = function () {
  let choice;

  while (true) {
    console.log('Please choose rock, paper, or scissors:');
    choice = readline.question();
    if (['rock', 'paper', 'scissors'].includes(choice)) break;
    console.log('sorry, invalid choice');
  }

  this.move = choice;
}

function RPSgame() {
  this.human = new Human();
  this.computer = new Computer();
}

RPSgame.prototype.displayWelcomeMessage = function () {
  console.log('Welcome to rock paper scissors');
}
RPSgame.prototype.displayGoodbyeMessage = function () {
  console.log('thx for playing')
}

RPSgame.prototype.displayWinner = function () {
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
RPSgame.prototype.playAgain = function () {
  console.log('would you like to play again?');
  let answer = readline.question();
  return answer.toLowerCase()[0] === 'y'

}
RPSgame.prototype.play = function () {
  this.displayWelcomeMessage();
  while (true) {
    this.human.choose();
    this.computer.choose();
    this.displayWinner();
    if (!this.playAgain()) break;
  }
  this.displayGoodbyeMessage();
}

let game = new RPSgame();
console.log(game.constructor);

game.play()