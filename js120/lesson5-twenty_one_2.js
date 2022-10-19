let readline = require('readline-sync')
let shuffle = require('shuffle-array')
class Card {
  constructor(suit, value, hidden = false) {
    this.suit = suit;
    this.rank = value;
    this.pointVal = this.convertPointValue();
    this.hidden = hidden;
  }

  isHidden() {
    return this.hidden;
  }

  getValue() {
    return Number(this.pointVal);
  }

  isAce() {
    return this.rank === 'A';
  }

  isRoyal() {
    return Card.FACE_CARDS.includes(this.rank);
  }

  hide() {
    this.hidden = true;
  }

  unhide() {
    this.hidden = false;
  }

  convertPointValue() {

    if (this.isAce()) {
      return 11;
    } else if (parseInt(this.rank, 10)) {
      return parseInt(this.rank, 10)
    } else {
      return 10;
    };
  }

  toString() {
    if (this.isHidden()) return `[X]`
    return `[${this.suit}${this.rank}]`
  }

  static RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  static SUITS = ['D', 'C', 'H', 'S'];
  static FACE_CARDS = ['J', 'Q', 'K']
}

class Deck {
  constructor() {
    this.cards = undefined;
    this.reset();
  }

  reset() {
    this.generateDeck();
    this.shuffleCards();
  }

  generateDeck() {
    this.cards = [];
    for (let suit of Card.SUITS) {
      for (let rank of Card.RANKS) {
        this.cards.push(new Card(suit, rank))
      }
    }
  }

  shuffleCards() {
    shuffle(this.cards);
  }

  draw() {
    return this.cards.pop();
  }

}


class Participant {
  constructor() {
    this.hand = undefined;
    this.score = 0;
    this.lastDrawn = null;
    this.resetHand();
  }

  resetHand() {
    this.hand = [];
  }

  isBusted() {
    return this.score > TwentyOne.MAX_SCORE;
  }

  getScore() {
    return this.score;
  }

  getHand() {
    return this.hand;
  }

  takeCard(card) {
    this.hand.push(card)
    this.calcScore();
    this.lastDrawn = card;
  }

  getLastDrawn() {
    return this.lastDrawn;
  }


  calcScore() {
    let baseScore = 0;
    let aces = 0;

    for (let card of this.hand) {
      if (card.isHidden()) {
        continue;
      } else if (card.isAce()) {
        aces += 1;
        baseScore += card.getValue();
      } else {
        baseScore += card.getValue();
      }
    };


    while (baseScore > 21 && aces > 0) {
      baseScore -= 10
      aces -= 1;
    }

    this.score = baseScore;
  }

}

class Player extends Participant {
  constructor() {
    super();
    this.bank = this.bankroll()
  }

  bankroll() {
    return 5;
  }

  getBank() {
    return this.bank;
  }

  hitOrStay() {
    let choice;
    console.log('would you like to hit or stay?');
    while (true) {
      choice = readline.question();
      if (['hit', 'stay', 'h', 's'].includes(choice)) break;
      console.log('invalid response. please choose to hit or stay.');
    }

    return choice;
  }

  loseMoney() {
    if (this.getBank() > 0) {
      this.bank -= 1;

    }
  }

  gainMoney() {
    this.bank += 1;
  }

}

class Dealer extends Participant {
  constructor() {
    super();
  }

  takeHidden(card) {
    card.hide();
    this.hand.push(card)
  }

  revealHidden() {
    let hidden = this.getHand().find(card => {
      return card.isHidden();
    });

    hidden.unhide();
    this.calcScore();
  }
}

class TwentyOne {
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  static MAX_SCORE = 21;

  reset() {
    this.player.resetHand()
    this.dealer.resetHand();
    this.deck.reset();
    this.deal();

  }

  deal() {
    this.player.takeCard(this.deck.draw());
    this.player.takeCard(this.deck.draw());

    this.dealer.takeHidden(this.deck.draw());
    this.dealer.takeCard(this.deck.draw());
    this.dealer.getHand()
    console.log(`this.dealer.getHand(): `, this.dealer.getHand())
  }

  displayTable(phase = 'player') {
    console.clear();
    console.log('');
    console.log(`${phase === 'player' ? "Player's" : "Dealer's"} Phase`);
    console.log("=================");
    console.log(`You have $${this.player.getBank()} dollars`);

    if (this.dealer.getHand().length === 2) {
      console.log(`\nthe dealer shows\n`)
    } else {
      console.log(`\nThe dealer drew ${this.dealer.getLastDrawn()}\n`);
    }

    console.log(`${this.dealer.getHand()}`);
    console.log(`that's a score of ${this.dealer.getScore()}`);
    console.log(' ');

    console.log(`Your hand: `);
    console.log(`${this.player.getHand()}`)
    console.log(`that's a score of ${this.player.getScore()}`);
    console.log('');
  }

  displayWelcome() {
    console.log('Welcome to TwentyOne');
  }

  playerPhase() {
    while (!this.player.isBusted()) {
      this.displayTable();
      let choice = this.player.hitOrStay();
      if (['hit', 'h'].includes(choice)) this.player.takeCard(this.deck.draw());

      if (['stay', 's'].includes(choice)) break;
    }

  }

  dealerPhase() {
    this.dealer.revealHidden();
    this.displayTable('dealer');

    while (this.dealer.getScore() < 17) {
      this.displayTable('dealer');
      this.dealer.takeCard(this.deck.draw());;
      readline.question('enter any key to continue...');
    }
  }

  whoWon() {
    if (this.player.isBusted()) {
      this.player.loseMoney()
      return 'dealer'
    } else if (this.dealer.isBusted()) {
      this.player.gainMoney();
      return 'player'
    } else if (this.dealer.getScore() > this.player.getScore()) {
      this.player.loseMoney()
      return 'dealer'
    } else if (this.player.getScore() > this.dealer.getScore()) {
      this.player.gainMoney();
      return 'player'
    } else {
      return 'tie';
    }
  }

  displayResults() {
    let winner = this.whoWon();
    this.displayTable();
    console.log('');
    console.log(`Your final score is ${this.player.getScore()}`);

    if (this.player.isBusted()) {
      console.log('You busted out.')
    } else if (this.dealer.isBusted()) {
      console.log(`The dealer busted out with ${this.dealer.getScore()}`);
    } else {
      console.log(`The dealer's final score was ${this.dealer.getScore()}`);
    }
    console.log(winner === 'tie' ? 'It was a tie' : `${winner} wins`);
    readline.question('press any key to continue')
  }

  displayGoodbye() {
    console.log('thanks for playing');
  }

  round() {
    this.reset()
    this.displayWelcome();
    this.playerPhase();

    if (!this.player.isBusted()) {
      this.dealerPhase();
    }

    this.displayResults();

  }

  isSetOver() {
    return this.setWon() || this.setLost();
  }

  setWon() {
    return this.player.getBank() === 10;
  }

  setLost() {
    return this.player.getBank() === 0;
  }

  play() {
    while (!this.isSetOver()) {
      this.round()
    }

    this.displayGoodbye();
    
  }
}

let game = new TwentyOne();
game.play();



