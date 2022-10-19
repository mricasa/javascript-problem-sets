/* We could probably still try to make a proper randomized
computer choice by using weights. Will need further reasearch though. */


const CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const readline = require('readline-sync');
const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['rock', 'scissors'],
  lizard: ['spock', 'paper'],
}

const coinflip = () => {
  return Math.floor(Math.random() * 2);
};

function createPlayer() {
  return {
    move: null,
    score: 0,

  };
}

function createHistory() {
  return {
    moves: [],
    distribution: {},
    weight: [],
    moveMap: Object.entries(WINNING_MOVES),

    counterMove() {
      let coinFlip = coinflip();
      let commonMove = this.weight[0][0];
      let counters = this.moveMap.filter((combo) => {
        return combo[1].includes(commonMove)
      }).map(ele => ele[0])

      this.move = counters[coinFlip];
    },

    addChoice(choice) {
      this.moves.push(choice);
      this.distribution[choice] = 1 + (this.distribution[choice] || 0)
      this.calculateWeights()
    },

    calculateWeights() {
      let population = Object.values(this.distribution)
        .reduce((total, sum) => total + sum, 0);

      this.weight = Object.entries(this.distribution).map(([key, value], _, arr) => {
        return [key, value / population];
      }).sort((a, b) => b[1] - a[1])
    },

  }
}

function createComputer() {
  let playerObject = createPlayer();
  let history = createHistory();
  let computerObject = {

    choose() {
      let randomIndex = Math.floor(Math.random() * CHOICES.length);
      this.move = CHOICES[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject, history);
}

function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {

    moves: [],
    choose() {
      let choice;

      while (true) {

        console.log(`Please choose ${CHOICES.join(", ")}`);
        choice = readline.question();
        if (CHOICES.includes(choice)) break;
        console.log('Sorry invalid choice');
      }

      this.move = choice;
    },
  };
  return Object.assign(playerObject, humanObject);
}

function createRules() {
  let rules = {
    compare(humanMove, computerMove) {
      if (this[humanMove].includes(computerMove)) {
        return 'human';
      } else if (this[computerMove].includes(humanMove)) {
        return 'computer';
      } else {
        return 'tie';
      }
    },
  };
  return Object.assign({}, WINNING_MOVES, rules);
}



const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  ruleset: createRules(),



  determineWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    let result = this.ruleset.compare(humanMove, computerMove);

    if (result === 'human') {
      console.log('You win');
      this.human.score += 1;
    } else if (result === 'computer') {
      console.log('Computer win');
      this.computer.score += 1;
    } else {
      console.log('A tie');
    }
  },

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayWinner() {
    console.clear();
    console.log(`You chose ${this.human.move}`);
    console.log(`The computer chose ${this.computer.move}`);
    this.determineWinner();
    console.log(`You have ${this.human.score} points`)
    console.log(`The computer has ${this.computer.score} points`)

  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing.');
  },

  playAgain() {
    let answer;
    while (true) {
      console.log("Would you like to play again? (y / n)");
      answer = readline.question();
      if (['y', 'n'].includes(answer)) break;
      console.log('invalid answer');
    }
    return answer === 'y';
  },

  declareSetWinner() {
    console.log(`The winner of the set is the ${this.human.score === 3 ? 'human' : 'computer'}.`);
    console.log(`The final score was: Human: ${this.human.score}, Computer: ${this.computer.score}`)
  },

  resetScores() {
    [this.human.score, this.computer.score] = [0, 0];
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      while (this.human.score < 3 && this.computer.score < 3) {
        this.human.choose();
        this.computer.addChoice(this.human.move)
        coinflip() ? this.computer.counterMove() :this.computer.choose();
        this.displayWinner();
      }
      this.declareSetWinner();
      if (!this.playAgain()) break;
      this.resetScores();
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();