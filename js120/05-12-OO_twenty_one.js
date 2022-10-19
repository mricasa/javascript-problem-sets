let readline = require('readline-sync');

class Card {
  static SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  static RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  static POINTS = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]; // setting ace to 0

  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.assignPoint();
  }

  getRank() {
    return this.rank;
  }

  getSuit() {
    return this.suit;
  }

  assignPoint() {
    let pointIdx = Card.RANKS.indexOf(this.getRank());
    this.value = Card.POINTS[pointIdx];
  }

  toString() {
    return ` ${this.getRank()} of ${this.getSuit()}`;
  }

  isAce() {
    return this.getValue() === 0;
  }

  getValue() {
    return this.value;
  }
}

class Deck {
  static DECK_SIZE = 52;
  static HAND_SIZE = 2;
  constructor() {
    this.reset();
  }

  reset() {
    this.stack = [];
    Card.SUITS.forEach(suit => {
      Card.RANKS.forEach(rank => {
        this.stack.push(new Card(suit, rank));
      });
    });
    this.shuffle();
  }

  shuffle() {
    for (let idx = this.stack.length - 1; idx > 0; idx--) {
      let randomIdx = Math.floor((Math.random()) * (idx + 1));
      [this.stack[randomIdx], this.stack[idx]] =
        [this.stack[idx], this.stack[randomIdx]];
    }
  }

  getTopCard() {
    return this.stack.pop(this.stack);
  }

}

class Participant {
  constructor() {
    this.reset();
  }

  reset() {
    this.hand = [];
    this.score = 0;
    this.busted = false;
  }

  countAces() {
    return this.hand.reduce((count, card) => {
      if (card.isAce()) {
        return count + 1;
      } else {
        return count;
      }
    }, 0);
  }

  calcScore() {
    let aces = this.countAces();

    let baseScore = this.hand.reduce((points, card) => {
      return points + card.getValue();
    }, 0);

    let score = baseScore + aces;
    let difference = 21 - score;

    while (difference >= 10 && aces > 0) {
      score += 10;
      difference = 21 - score;
      aces -= 1;
    }

    this.score = score;
  }
  isBusted() {
    return this.score > 21;
  }

  hit(deck) {
    this.hand.push(deck.getTopCard());
    this.calcScore();
  }

  getLastCard() {
    return this.hand[this.hand.length - 1];
  }

}
class Player extends Participant {
  constructor() {
    super();
    this.bankroll();
  }

  bankroll() {
    this.money = 5;
  }

  getCash() {
    return `Chips: $${this.money} dollars`;
  }

  loseCash() {
    this.money -= 1;
  }

  gainCash() {
    this.money += 1;
  }

  isBankrupt() {
    return this.money <= 0;
  }

  isRich() {
    return this.money >= 10;
  }

}
class Dealer extends Participant {
  constructor() {
    super();
  }

  displayHiddenScore() {
    let shownCardValue = this.hand[0].getValue();
    return shownCardValue ? shownCardValue : 11;
  }

  hiddenHand() {
    return `${this.hand[0]} and one hidden card`;
  }

}

class TwentyOneGame {
  static PLAYER_HIT_MSG = "You chose to hit"
  static PLAYER_STAY_MSG = "You chose to stay."
  static DEALER_REVEAL = "The dealer reveals his hand."
  static PLAYER_TURN = "It's your turn."
  static PLAYER_CHOICE_PROMPT = "Would you like to hit or stay? (enter h or s)"

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  gameLoop() {
    this.reset();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    if (!(this.player.isBusted())) {
      this.dealerTurn();
    }
    let winner = this.whoWon();
    this.adjustCash(winner);
    this.showCards(false);
    this.displayResults(winner);
  }

  adjustCash(winner) {
    if (winner) {
      this.player.gainCash();
    } else {
      this.player.loseCash();
    }
  }

  start() {
    this.displayWelcomeMessage();
    while (true) {
      this.gameLoop();
      
      if (this.player.isBankrupt() || this.player.isRich()) break;

      let choice;
      while (true) {
        console.log(`would you like to play again? please type in y or n`);
        choice = readline.question();
        break;
      }
      if (choice === 'n') break;
      continue;

    }
    this.displayGoodbyeMessage();
  }

  showCards(playerTurn = true) {
    console.clear();
    console.log(playerTurn ? TwentyOneGame.PLAYER_TURN :
      TwentyOneGame.DEALER_REVEAL);
    console.log(this.player.getCash());
    console.log('');
    console.log(playerTurn ? this.readableDealerHand() :
    this.readableDealerHand(true));
    console.log("");
    console.log(this.readablePlayerHand());
    console.log('');
  }

  displayWelcomeMessage() {
    console.clear();
    console.log(`welcome to twenty one`);
    this.pressAnyKey();
  }

  dealCards() {
    for (let times = 1; times <= 2; times++) {
      this.player.hit(this.deck);
      this.dealer.hit(this.deck);
    }
    this.player.calcScore();
    this.dealer.calcScore();
  }

  readablePlayerHand() {
    return `Player hand:\n${this.player.hand}.\n\n A total of ${this.player.score} points.`;
  }

  readableDealerHand(revealed = false) {
    if (!revealed) {
      return `Dealer hand:\n${this.dealer.hiddenHand()}.\n\n A total of ${this.dealer.displayHiddenScore()} points.`;
    } else {
      return (`Dealer hand:\n${this.dealer.hand}.\n\n A total of ${this.dealer.score} points.`);
    }
  }


  whoWon() {
    if (this.player.isBusted() ||
      (this.dealer.score > this.player.score &&
        !this.dealer.isBusted())) {
      return 0;

    } else if (this.dealer.isBusted() ||
      (this.player.score > this.dealer.score)) {
      return 1;

    } else {
      return 2;
    }
  }

  displayResults(winner) {
    if (this.player.isBusted() || this.dealer.isBusted()) {
      this.displayBustedResult(winner);
    } else {
      this.displayScoreResult(winner);
    }
  }


  displayBustedResult(winner) {
    if (winner) {
      console.log(`the dealer busted out with ${this.dealer.score} points`);
      console.log(` you won`);
    } else {
      console.log(`You busted out with ${this.player.score} points.`);
      console.log(` you lost`);
    }
  }

  displayScoreResult(winner) {
    switch (winner) {
      case 0:
        console.log(`The dealer score is  ${this.dealer.score} to your ${this.player.score} `);
        console.log(` you lost`);
        break;

      case 1:
        console.log(` Your final score is ${this.player.score} to the dealer's ${this.dealer.score} `);
        console.log(`you win`);
        break;

      default:
        console.log(` it was a tie`);
    }
  }

  displayGoodbyeMessage() {
    console.log(`\nthx for playing`);
  }

  pressAnyKey() {
    console.log(`Press any key to continue...`);
    readline.question();
  }

  reset() {
    this.deck.reset();
    this.player.reset();
    this.dealer.reset();
  }

  playerTurn() {
    while (true) {
      let choice;

      while (true) {
        console.log(TwentyOneGame.PLAYER_CHOICE_PROMPT);
        choice = readline.question();
        if (['h', 's'].includes(choice)) break;
      }

      if (choice === 'h') {
        console.log(TwentyOneGame.PLAYER_HIT_MSG);
        this.player.hit(this.deck);
        this.showCards();
        console.log(`you drew ${this.player.getLastCard()}`);
        this.pressAnyKey();
        if (this.player.isBusted()) break;

      } else if (choice === 's') {
        console.log(TwentyOneGame.PLAYER_STAY_MSG);
        this.pressAnyKey();
        break;
      }
    }
  }

  dealerTurn() {
    console.clear();
    console.log(`DEALER PHASE`);
    this.showCards(false);
    this.pressAnyKey();
    while (true) {
      if (this.dealer.score >= 17 || this.dealer.isBusted()) break;
      this.dealer.hit(this.deck);
      this.dealer.calcScore();
      this.showCards(false);
      console.log(`Dealer drew ${this.dealer.getLastCard()}`);
      this.pressAnyKey();
    }
  }

}


let game = new TwentyOneGame();
game.start();