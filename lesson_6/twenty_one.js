const readline = require('readline-sync');

// CONSTANTS
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const SUITS = ['H', 'D', 'C', 'S'];

let DECK = [];
let PLAYER_HAND = [];
let DEALER_HAND = [];

let POINTS = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: null // Aces calculated separately
};

let CARD_WORDS = {
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  J: 'Jack',
  Q: 'Queen',
  K: 'King',
  A: 'Ace',
  H: 'Hearts',
  C: 'Clubs',
  D: 'Diamonds',
  S: 'Spades'
}

// DISPLAY
function prompt(message) {
  console.log(`==> ${message}`);
}

function pause() {
  while (true) {
    prompt(`Press any key to continue`);
    readline.question();
    console.clear();
    break;
  }
}

function joinOr(arr, delimiter = ', ', article = 'or') {
  let part1 = arr.slice(0, -1).join(delimiter);
  if (arr.length <= 2) {
    return arr.join(article + ' ');
  }
  return part1 + delimiter + article + " " + arr.slice(-1).shift();
}


function testValidResponse(...keys) {
  prompt(`Please enter ${joinOr(keys)}`)
  let response;
  while (true) {
      response = readline.question().toLowerCase();
      if (keys.includes(response)) break;
      prompt(`That is not a valid response. Please enter ${joinOr(keys)}.`)
    }
  
  return response;
  }

  function readCards(card) {
    let [value, suit] = [CARD_WORDS[card[1]], CARD_WORDS[card[0]]];
    return `${value} of ${suit}`;
  }

  function displayTable(dealerHand, playerHand, compareCards = false) {
    console.clear();
    let dealerRevealed = compareCards === true ? dealerHand : dealerHand.
      filter((_, index) => index !== 0);
    console.log("Dealer shows ", dealerRevealed);
    prompt(`The dealer's score is ${calculateScore(dealerRevealed)}`)
    console.log("");
    console.log("You have", playerHand);
    prompt(`Your score is ${playerTotal}`);
    console.log("")
  }

// RESULTS & Scoring



function busted(cards) {
  if (calculateScore(cards) > 21) return true;
  return false;
}

function calculateScore(cards) {
  let baseScore = 0;
  let aces = 0;

  for (let idx = 0; idx < cards.length; idx++) {
    if (cards[idx][1] === 'A') {
      aces += 1;
    } else {
      baseScore += POINTS[cards[idx][1]];
    }
  }

  let score = baseScore + aces;

  let difference = 21 - score;

  while (difference >= 10 && aces > 0) {
    score += 10;
    difference = 21 - score;
    aces -= 1;
  }

  return score;
}

function compareCards(dealerHand, playerHand) {
  if (calculateScore(dealerHand) < playerTotal) {
    return 'player';
  } else if (calculateScore(dealerHand) > playerTotal) {
    return 'dealer';
  } else {
    return 'tie';
  }
}

function declareResults(dealerHand, playerHand, scores) {
  displayTable(dealerHand, playerHand, true);
  if (busted(dealerHand)) {
    scores.player += 1;
    prompt(`The dealer busted out with ${calculateScore(DEALER_HAND)}. You win.`);

  } else if (busted(playerHand)) {
    scores.dealer += 1;
    prompt(`You busted out with ${calculateScore(PLAYER_HAND)}. You lose.`);

  } else {
    switch (compareCards(dealerHand, playerHand)) {
      case 'tie':
        prompt(`You and the dealer tied with ${playerTotal} points.`);
        break;
      case 'player':
        scores.player += 1;
        prompt(`You won with ${playerTotal} points`);
        break;
      case 'dealer':
        scores.dealer += 1;
        prompt(`Dealer won with ${calculateScore(dealerHand)} points`);
        break;
    }
  }
}



// CARDS Movement
function shuffle(cards) {
  for (let idx = cards.length - 1; idx > 0; idx--) {
    let otherIdx = Math.floor(Math.random() * (idx + 1));
    [cards[idx], cards[otherIdx]] = [cards[otherIdx], cards[idx]];
  }
}

function dealCard(deck, hand, quantity = 1) {
  if (quantity > deck.length) {
    return null;
  }
  for (let times = 0; times < quantity; times++) {
    hand.push(deck.pop());
  }
}


// START UP
function initializeGame() {
  DECK = SUITS.reduce((deck, suit) => {
    return deck.concat(VALUES.map(value => {
      return [suit, String(value)];
    }
    ));
  }, []);

  shuffle(DECK);

  PLAYER_HAND = [];
  DEALER_HAND = [];
  dealCard(DECK, PLAYER_HAND, 2);
  playerTotal = calculateScore(PLAYER_HAND);

  dealCard(DECK, DEALER_HAND, 2);
  dealerTotal = calculateScore(DEALER_HAND);
  // can add score management here as well
}


// 
// Game flow

let playerTotal;
let dealerTotal; // can't memoize due to required hidden card function

function playerPhase(dealerHand, playerHand, deck) {
  let action;
  while (true) {
    while (true) {
      displayTable(dealerHand, playerHand);

      if (['h', 'hit'].includes(action)) {
        prompt(`You drew the ${readCards(playerHand[playerHand.length - 1])}`)
      }
      prompt('Would you like to hit or stay?');

      action = testValidResponse('hit', 'stay', 'h', 's');
      if (action) break;
    }
    console.clear();
    prompt(`You chose to ${['hit', 'h'].includes(action) ? 'hit' : 'stay'}`);
    pause();
    if (action === 'hit' || action === 'h') dealCard(deck, playerHand);
    playerTotal = calculateScore(playerHand);

    if (action === 'stay' || action === 's' || busted(playerHand)) break;
    
  }
}

function dealerPhase(dealerHand, playerHand, deck) {
  console.clear();
  prompt(`Onto the dealer phase....`);
  pause();

  displayTable(dealerHand, playerHand, true);

  prompt(`Dealer revealed the ${readCards(dealerHand[0])}`);
  pause();

  while (true) {
    if (calculateScore(dealerHand) >= 17 || busted(dealerHand)) break;
    dealCard(DECK, dealerHand);
    dealerTotal = calculateScore(dealerHand);

    displayTable(dealerHand, playerHand, true);
    prompt(`Dealer drew the ${readCards(dealerHand
                                       [dealerHand.length - 1])}`);
    pause();
  }
}
//////////////////////////////////////////////////////////////////////////
//GAME LOOP
//////////////////////////////////////////////////////////////////////////



while(true) {
  let scoreboard 

  while (true) {
    scoreboard =  {player: 0, dealer: 0}

    console.clear();
    prompt('Welcome to Twenty One');
    pause();

    while (true) {
      console.clear();

      initializeGame();

      playerPhase(DEALER_HAND, PLAYER_HAND, DECK);
      displayTable(DEALER_HAND, PLAYER_HAND, true);

      if (!busted(PLAYER_HAND)) {
        dealerPhase(DEALER_HAND, PLAYER_HAND, DECK)
      }

      displayTable(DEALER_HAND, PLAYER_HAND, true);
      declareResults(DEALER_HAND, PLAYER_HAND, scoreboard);

      console.log(`Match score is Player: ${scoreboard.player}, Dealer: ${scoreboard.dealer}`)
      pause();

      if (scoreboard.player === 3) {
        prompt('You won the match!')
        break;
      } else if (scoreboard.dealer === 3) {
        prompt('You lost the match')
        break;
      }
    }

    let playAgain;
    while (true) {
      prompt('Do you want to play again?');
      playAgain = testValidResponse('yes', 'no', 'y', 'n');
      if (playAgain) break;
    }
    if (playAgain === 'n') break;
  }
  
}
