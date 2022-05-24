const readline = require('readline-sync');

// CONSTANTS
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const SUITS = ['H', 'D', 'C', 'S'];
let DECK = SUITS.reduce((deck, suit) => {
  return deck.concat(VALUES.map(value => {
    return [suit, String(value)];
  }
  ));
}, []);
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

function declareResults(dealerHand, playerHand) {

  if (busted(dealerHand)) {
    prompt(`The dealer busted out with ${calculateScore(DEALER_HAND)}. You win.`);

  } else if (busted(playerHand)) {
    prompt(`You busted out with ${calculateScore(PLAYER_HAND)}. You lose.`);

  } else {
    switch (compareCards(dealerHand, playerHand)) {
      case 'tie':
        prompt(`You and the dealer tied with ${calculateScore(playerHand)} points.`);
        break;
      case 'player':
        prompt(`You won with ${calculateScore(playerHand)} points`);
        break;
      case 'dealer':
        prompt(`Dealer won with ${calculateScore(dealerHand)} points`);
        break;
    }
  }
}

function compareCards(dealerHand, playerHand) {
  if (calculateScore(dealerHand) < calculateScore(playerHand)) {
    return 'player';
  } else if ((calculateScore(dealerHand) > calculateScore(playerHand))) {
    return 'dealer';
  } else {
    return 'tie';
  }
}

function readCards() {
  // this function will translate card elements to words
}

function displayTable(dealerHand, playerHand, compareCards = false) {
  let dealerRevealed = compareCards === true ? dealerHand : dealerHand.
    filter((_, index) => index !== 0);
  console.log("Dealer shows ", dealerRevealed);
  console.log("");
  console.log("You have", playerHand);
  prompt(`Your score is ${calculateScore(PLAYER_HAND)}`);
}

// CARDS
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

// SCORING
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
  dealCard(DECK, DEALER_HAND, 2);
  // can add score management here as well
}

//////////////////////////////////////////////////////////////////////////
//GAME LOOP
//////////////////////////////////////////////////////////////////////////


prompt('Welcome to blackjack');
pause();
//Display table and initialize
while (true) {
  initializeGame();
  console.clear();
  //displayTable(DEALER_HAND, PLAYER_HAND);
  let action;

  //Player Phase
  while (true) {
    while (true) {
      console.clear();
      if (action === 'hit' || action === 'h') {
        prompt(`You drew ${PLAYER_HAND[PLAYER_HAND.length - 1]}`);
      }

      displayTable(DEALER_HAND, PLAYER_HAND);
      prompt('Would you like to hit or stay?');

      action = readline.question().toLowerCase();

      if (['hit', 'stay', 's', 'h'].includes(action)) break;
      prompt('Invalid response. Try again.');
    }

    prompt(`You chose to ${['hit', 'h'].includes(action) ? 'hit' : 'stay'}`);

    if (action === 'hit' || action === 'h') dealCard(DECK, PLAYER_HAND);

    if (busted(PLAYER_HAND)) break;

    if (action === 'stay' || action === 's') {
      prompt(`Onto the dealer phase....`);
      pause();
      break;
    }
  }

  if (!busted(PLAYER_HAND)) {
    prompt(`Dealer reveals ${DEALER_HAND[0]}`);
    displayTable(DEALER_HAND, PLAYER_HAND, true);
    pause();

    while (true) {
      if (calculateScore(DEALER_HAND) >= 17 || busted(DEALER_HAND)) break;
      dealCard(DECK, DEALER_HAND);
      prompt(`Dealer drew ${DEALER_HAND[DEALER_HAND.length - 1]}`);
      displayTable(DEALER_HAND, PLAYER_HAND, true);
      pause();
    }
  }

  displayTable(DEALER_HAND, PLAYER_HAND, true);
  declareResults(DEALER_HAND, PLAYER_HAND);

  let playAgain;
  while (true) {
    prompt('want to play again?');
    playAgain = readline.question().toLowerCase();

    if (['y', 'n'].includes(playAgain)) break;
    prompt('that is not a valid response');
  }

  if (playAgain === 'n') break;
} // Game loop end


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


// TEST CASES

// Score & Ace calculator (looks good)
// let testOneAce = [['H', 'A'],  ['H', '2'], ['C', '8']] // 21
// let testTwoAce = [['H', 'A'], ['C', 'A'], ['H', '2'], ['C', '8']] // we want to see 12
// let testTwoAceAndUnder =  [['H', 'A'], ['C', 'A'], ['H', '2'], ['C', '7']] // we want to see 21
// let testCrazyAce = [['H', 'A'], ['C', 'A'], ['D', 'A'], ['S', 'A']] // we want to see 14
// let impossibleHand = [['H', 'A'], ['C', 'A'], ['D', 'A'], ['S', 'A'], ['C', 'Q'], ['D', 'J']] // ok
// let noAces = [['C', 'Q'], ['D', 'J']] // works

// // console.log(calculateScore(testCrazyAce));
// console.log(calculateScore(noAces));

// let dealerTest = [['H', 'A'],  ['H', '2'], ['C', '8']]
// console.log(calculateScore(dealerTest))


// Archived psudocode

// // for ace calculations
// **
//  * Factoring in aces to base score
//  * HMMMMMM
//  * Do the aces count as 1 or 11?
//  * Let's start with one ace.
//  *
//  * Given a base score
//  * If the base score plus 11 is less than or equal to 21
//  * the ace shall have a value of 11
//  * Simple enough?
//  *
//  * Two aces
//  *
//  * Given a base score
//  * If the base score plus 11 + 11 is less than or equal to 21 (it always
//  * will be greater than 21  with two aces)
//  * So the question is rather... count one as 11 and the other as 1?
//  * or count both as 1?
//  *
//  * Base: 9 AND 2 aces
//  * + 1 Ace(11)
//  * = 20
//  * + 1 Ace(11)
//  * = 31
//  *    If score > 21, score it as 1
//  * = 20
//  * + 1 Ace(1)
//  * = 21
//  *
//  * Base: 10 AND 2 aces
//  * + 1 Ace(11)
//  * = 21
//  * CHECK for distance to 21 (=0)
//  * ...
//  *
//  * Maybe work backwards. Count all aces as 1s first
//  * Base 9 and 2 aces
//  * Base 9 + (1) + (1)
//  * Less than 21?
//  *    Yes
//  * Distance from 21?
//  *    10
//  * Change 1 ace to an 11 (-1, +11)
//  * Distance from 21? 0
//  * Done
//  *
//  * Base 10 and 2 aces
//  * Base 10 + (1) + (1)
//  * = 12
//  * Distance from 21 is 9. (Ace conversion in points is 10)
//  * 9 < 10, so stay
//  *
//  * Base 7 and 2 aces
//  * 7 + (1) + (1)
//  * = 9
//  * 21 - 9 = 12
//  * 9 + 10 = 19
//  * 21 - 19 = 2 STOP
//  *
//  * Given a base score and N aces
//  * Declare total, init to 0
//  * Declare aceEleven = 0
//  *
//  * Sum up base score and N aces as 1 point, and assign to total
//  * Calculate the difference between 21 and total
//  * While difference is 10 or more? AND aceEleven is < N?
//  *    Add 10 points
//  *    increment aceEleven by 1
//  * If the difference is less than 10, stay put
//  *
//  *
//  */


/**
 * Twenty-One
 *
 * Rules
 * =====
 * Deck: 52-card deck
 *    4 suits (Hearts, Diamonds, Clubs, Spades)
 *   13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A)
 *
 * Goal: Get as close to 21 as possible without going over. If over 21, it is
 *  a bust, and we lose.
 *
 * Setup: Consists of a dealer and a player. Both participatns dealt a hand
 *   of two cards. The player can see their two cards, but can only see
 *    one of the dealer's cards.
 *
 * Card values:
 *    2 - 10: Worth their face value
 *    J, Q, K: Worth 10
 *    A: Worth 1 or 11 depending on circumstances
 *      Value is determined each time a new card is drawn from the deck.
 *      How will we handle multiple aces?
 *
 * Phases
 * ======
 * Player turn: Player always goes first
 *    Hit: Dealt another card. Bust if over 21
 *    Stay: Pass to the dealer
 *
 * Dealer turn: When the player stays, it's the dealer's turn.
 *    Hit until the total is at least 17. If the dealer busts, then the
 *    player wins.
 *
 * Comparing cards: When both the player and the dealer stay, it's time to
 *  compare the total value fo the cards with and see who has the
 *  highest value.
 *
 * Pseudocode
 * ==========
 * 1. Initialize the deck
 * 2. Deal cards to the player and dealer
 * 3. Player turn: Hit or Stay
 *   - Repeat until bust or stay
 * 4. If player bust, dealer wins
 * 5. Dealer turn: hit or stay
 *    - Repeat until total >= 17
 * 6. If dealer busts, player wins
 * 7. Compare cards and declare winner.
 *
 * DC + A
 * ======
 * Deck: Two dimensional array. Elements: [Suit, Value]
 *
 * initialize deck, and shuffle
 * dealCards, 2 to player, 2 to dealer
 *
 *
 * Player turn
 * Ask the player if they want to hit or stay
 * If stay, stop asking
 * Otherwise go to #1
 *
 * Dealer turn
 * If the total < 17, hit
 * If total >= 17, stay
 * Otherwise repeat #1
 *
 * busted
 * return true if the total is > 21
 * else return null
 *
 * displayTable
 * display the dealer's cards, but keep one hidden.
 * If comparing scores, reveal all of the dealer's cards
 * display all of the player's cards
 *
 * determineResult
 * if player busted, dealer wins
 * if dealer busted, player wins
 * If neither busted, compare cards
 * Returns winner
 *
 * compareCards
 * If player card points are greater than dealers,
 *  player wins
 * else,
 *  dealer wins
 *
 * calculatePoints
 * Make a copy of the hand
 * Extract any aces of the aces to a sub-hand
 * Declare scoreTotal: All other values in the copy of the hand can be
 *    tallied up based on respective point value
 * scoreLimit is 21
 * In the aces hand,
 * determine if the aces should count as 1 or 11.
 * Declare aceValue, and initalize to 0
 * Loop over aces
 *    If scoreTotal + ace as 11 is > scoreLimit, ace counts as 1
 *    else, ace counts as 11
 *    aceValue incremented.
 *
 *
 *
 */