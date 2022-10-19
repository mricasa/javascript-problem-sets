// I would rewrite the whole thing lol
// everything is too tightly coupled

const shuffle = require('shuffle-array');
const readline = require('readline-sync');


class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    // this.center = false;
  }

  static SUITS = ['H', 'C', 'D', 'S'];
  static RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  isMatch(otherCard) {

    return this.isCrazyEight() ||
      this.suit === otherCard.suit ||
      this.rank === otherCard.rank;
  }

  isCrazyEight() {
    return this.rank === '8'
  }

  // isCenterCard() {
  //   return this.center;
  // }

  // makeCenter() {
  //   this.center = true;
  // }

  // unmakeCenter() {
  //   this.center = false;
  // }

  toString() {
    return String(this.suit + this.rank)
  }

  readCard() {
    return `The ${this.rank} of ${this.suit}`
  }

}

const manageCards = {
  removeCard(idx) {
    if (arguments.length === 0) return this.cards.pop();
    return this.cards.splice(idx, 1)[0];
  },

  removeCards(count) {
    let result = [];
    while (count > 0) {
      result.push(this.removeCard());
      count -= 1;
    }
    return result;
  },

  addCard(card) {
    this.cards.push(card);
  },

  addCards(cards) {
    for (let card of cards) {
      this.addCard(card);
    }
  },
  isEmpty() {
    return this.cards.length === 0;
  },
  count() {
    return this.cards.length;
  },
}
class Deck {
  constructor() {
    this.reset();
  }

  generateDeck() {
    let result = [];
    Card.SUITS.forEach(suit => {
      Card.RANKS.forEach(rank => {
        result.push(new Card(suit, rank));
      })
    })
    return result;
  }

  shuffle() {
    shuffle(this.cards);
  }
  reset() {
    this.cards = this.generateDeck();
    this.shuffle();
  }



}

Object.assign(Deck.prototype, manageCards)
class CenterPile {
  constructor() {
    // its a pile of cards
    this.cards = [];
    this.centerCard;
  }

  updateCenterCard(card) {
    this.centerCard = card;
  }

  takeAllButCenter() {
    //STUB
  }

  isEmpty() {
    //STUB
  }

  reset() {
    this.cards = [];
  }



  toString() {
    return String(this.centerCard);
  }

}
Object.assign(CenterPile.prototype, manageCards)

// needed to override the addCard method 
CenterPile.prototype.addCard = function (card) {
  this.cards.push(card);
  this.updateCenterCard(card);
}
const Hand = {
  cards: [],

  matchingCards(pile) {
    return this.cards.filter((card) => {
      return card.isMatch(pile.centerCard);
    })
  },

  draw(deck) {
    this.addCard(deck.removeCard(1));
  },

  isEmpty() {
    return this.cards.length === 0;
  },

  handSize() {
    // console.log('flag');

    return this.cards.length;
  },

  addCard() {
    //STUB
  },

  shedCard() {
    //STUB
  },

  reset() {
    //STUB
  }
}

Object.assign(Hand, manageCards)

class PlayerCPU {
  constructor() {
    this.cards = [];
    this.kind = 'computer'
  }

  place() {
    // STUB
    // place the first matching card in the hand
  }


  takeTurn(pile, deck, game) {
    //BOOKMARK
    console.clear();
    console.log('THIS IS THE COMPUTERS TURN')
    let matches = this.matchingCards(pile);
    console.log(`    pile.centerCard on cpu turn// `, pile.centerCard)
    console.log(`\nCOMPUTER'S matches // `, matches)
    console.log(`\nCOMPUTER'S cards // `, this.cards)

    while (matches.length === 0) {
      console.log(`\n\n\n\nTHE COMPUTER DID NOT HAVE ANY MATCHES that matched ${pile.centerCard}.\n\n\n\n`)

      this.draw(deck);
      console.log(`\nCOMPUTER drew hand is now size ${this.handSize()}`)
      matches = this.matchingCards(pile);
      console.log(`\nCOMPUTER'S matches // `, matches)
    }

    let idx = this.cards.indexOf(matches[0]);
    let placedCard = this.cards.splice(idx, 1)[0];
    pile.addCard(placedCard);
  }
}

class PlayerHuman {
  constructor() {
    this.cards = [];
    this.kind = 'human';
  }

  choose() {
    //STUB
  }

  place() {
    //STUB
  }



  readHand(pile) {
    console.log(`You have:`)
    for (let i = 0; i < this.handSize(); i++) {
      let currentCard = this.cards[i]
      let matched = currentCard.isMatch(pile.centerCard)
      console.log(`${i + 1}: ${currentCard.readCard()} ${matched ? '*' : ''}`);
    }
  }

  chooseCard(num) {
    if (!(num > 0 && num <= this.handSize())) return 'invalid option';
    return this.cards[num - 1];
  }

  takeTurn(pile, deck, game) {
    while (true) {
      let choice
      let matches = this.matchingCards(pile);

      //console.log(`matches // `, matches)
      while (true) {
        game.displayTable()
        this.readHand(pile);

        console.log('Choose a card (enter a number) or draw a card (d)');

        choice = readline.question();
        if (choice === 'd') break;
        //let selectedCard = this.chooseCard(choice);
        if (matches.includes(this.chooseCard(choice))) break;
      }

      if (choice === 'd') {
        this.draw(deck);
        console.clear();
      } else {
        pile.addCard(this.removeCard(choice - 1))
        console.clear();
        break;
      }
    }




  }
}

Object.assign(PlayerCPU.prototype, Hand);
Object.assign(PlayerHuman.prototype, Hand);

class Interface {
  // these methods might need to be in the game object so it has access
}

const CourtesyMessages = {
  displayWelcome: function () {
    console.log(' welcome to crazy eights');
  },

  displayGoodbye: function () {
    console.log('byeeee');
  }
}

class CrazyEights {
  constructor() {
    this.human = new PlayerHuman();
    this.cpu1 = new PlayerCPU();
    this.deck = new Deck();
    this.pile = new CenterPile();
    this.turn = 1;
    this.turnOrder = this.makeTurnOrder();
  }

  makeTurnOrder() {
    // how to handle looping back through this array
    return [this.human, this.cpu1];
  }

  takeTurns() {
    // 
    //  this.displayTable();
    let actor = this.whoseTurn();
    actor.takeTurn(this.pile, this.deck, this);
    this.incrementTurn();
  }

  whoseTurn() {
    let idx = (this.turn + 1) % this.turnOrder.length;
    return this.turnOrder[idx];
  }

  computerTakesTurn() {
    //STUB
    // not sure if this lives here or on the entity. can use poly morph if its on ent
  }

  humanTakesTurn() {
    //STUB
    // see comment above
  }


  displayTable() {
    //STUB
    //console.log(`this.pile.cards // `, this.pile.cards)
    console.log(`\n\n\nthis.pile.centerCard// `, this.pile.centerCard)
    console.log(`\n\n\nthis.pile.cards.length // `, this.pile.cards.length)
    console.log(`this.cpu1.handSize() // `, this.cpu1.handSize())
    console.log(`this.deck.count() // `, this.deck.count())
  }



  incrementTurn() {
    this.turn += 1;
  }


  noMatches() {
    //STUB
  }


  reset() {
    this.turn = 1;
    this.human.reset();
    this.cpu1.reset();
    this.deck.reset();
    this.pile.reset();

    this.human.addCards(this.deck.removeCards(5))
    this.cpu1.addCards(this.deck.removeCards(5))
    this.pile.addCard(this.deck.removeCard());
  }

  isGameOver() {
    //STUB
    return false;
  }

  detectWinner() {
    // STUB
  }

  declareWinner() {
    //STUB
  }
  play() {
    //SPIKE
    console.clear();
    this.displayWelcome();
    this.reset();
    while (!this.isGameOver()) {
      this.takeTurns();
    }

    this.declareWinner();
    this.displayGoodbye();
  }
}
Object.assign(CrazyEights.prototype, CourtesyMessages);

let game = new CrazyEights();
game.play();
console.log(game.deck.cards.length);


