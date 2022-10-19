/*
====================================================================

Assignment: OO Rock Paper Scissors

====================================================================
*/

/*
The game flow should go like this:

    The user makes a choice.
    The computer makes a choice.
    The winner is displayed.

This time, we'll use objects and factory functions to code it in an object-oriented style.

The classical approach to planning an object-oriented application includes several steps:

    Write a textual description of the problem or exercise.
    Extract the significant nouns and verbs from the description.
    Organize and associate the verbs with the nouns.

Note that the nouns are the objects or types of objects and the verbs are the behaviors or methods. In OO design, you shouldn't think about the game flow logic during this early design phase. OOP is all about organizing and modularizing the code into a cohesive structure - objects. Only after you know what objects you need can you look at orchestrating the program's flow. For now, we won't worry about this step.

Step 1: Textual description

RPS is a two-player game where each player chooses one of three possible moves: rock, paper, or scissors. The winner is chosen by comparing their moves with the following rules:

    Rock crushes scissors, i.e., rock wins against scissors.
    Scissors cuts paper, i.e., scissors beats paper.
    Paper wraps rock, i.e., paper beats rock.
    If the players chose the same move, the game is a tie.

Step 2: Extract the significant nouns and verbs from the description

Nouns: Player, move, rule
Verbs: choose,

Note that we've decided to ignore the nouns "rock," "paper," and "scissors": each is a variation of a move. You can think of them as moves that each have a different state. Therefore, we'll treat "move" as a noun of interest.

Step 3: Organize and associate the verbs with the nouns.

Once we have the nouns and verbs, we must organize them by associating each verb with the noun that performs the action represented by the verb. Since we have so few nouns and verbs, you might think that organizing them should be simple. However, it's not always easy to determine which verb goes with which noun. In our RPS game, for instance, a "Player" can "choose," but "Move" and "Rule" don't currently have any associated verbs. Furthermore, it's not clear which noun should respond to the "compare" verb.

Player
 - choose

Move

Rule

???
- compare
*/
// }
// function createPlayer(playerType) {
//   return {
//     playerType,
//     move: null,

//     choose() {
//       if (this.isHuman()) {
//         let choice;

//         while (true) {
//           console.log('Please choose rock, paper, or scissors');
//           choice = readline.question();
//           if (CHOICES.includes(choice)) break;
//           console.log('Sorry invalid choice')
//         }
//         this.move = choice;

//       } else {
//         let randomIndex = Math.floor(Math.random() * CHOICES.length);
//         this.move = CHOICES[randomIndex];
//       }
//     },

//     isHuman() {
//       return this.playerType === 'human';
//     },
//   };
// }

const CHOICES = ['rock', 'paper', 'scissors'];
const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {

    choose() {
      let randomIndex = Math.floor(Math.random() * CHOICES.length);
      this.move = CHOICES[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {
    choose() {
      let choice;

      while (true) {

        console.log('Please choose rock, paper, or scissors');
        choice = readline.question();
        if (CHOICES.includes(choice)) break;
        console.log('Sorry invalid choice');
      }

      this.move = choice;
    }
  };
  return Object.assign(playerObject, humanObject);
}


// orchestration engine
const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose ${this.human.move}`);
    console.log(`The computer chose ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You won');

    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log(' you lost');

    } else {
      console.log('it was a tie');
    }

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

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();