Math.seedrandom = require('seedrandom');

/* 
The first time a robot is booted, a random name is generated.
Every once in a while, we need to reset a robot to its factory settings, which means that their name gets wiped.
The next time we ask, it will respond to a new random name.
The names must be random; they should not follow a predictable sequence. Random means there is a risk of collisons. Solution should not allow the use of the same name twice.


*/

let NAME_HISTORY = [];
let Robot = (function () {
  const ALPHABET = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  function randomLetter() {
    return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }

  function randomNumber() {
    return String(Math.floor(Math.random() * 10));
  }

  function nameRandomizer() {
    let name = randomLetter() + randomLetter() + randomNumber() + randomNumber() + randomNumber();
    while (NAME_HISTORY.includes(name)) {
      name = randomLetter() + randomLetter() + randomNumber() + randomNumber() + randomNumber();
    }
    NAME_HISTORY.push(name);
    return name;
  }

  return class {
    constructor() {
      this.reset();
    }
    name() {
      return this.someName;
    }
    reset() {
      this.someName = nameRandomizer();
    }
  }
})();


module.exports = Robot;

let robot1 = new Robot();
let robot2 = new Robot();

console.log(`robot1.name(): `, robot1.name())
console.log(`robot2.name() // `, robot2.name());