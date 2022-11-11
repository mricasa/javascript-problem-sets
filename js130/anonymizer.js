const readline = require('readline-sync');

/* 
Account prototype object.
- anonymizes user obs on init
- created obs should not have access to the function that anonymizes.

- the anon fn creates 16 char seq composed of numbers and letters.

Properties of Account object:


*/

/* chars
*/




let Account = (function () {
  let firstName;
  let lastName;
  let email;
  let password;

  let VALID_CHARS = (function () {
    let validChars = [];
    for (let code = 48; code <= 122; code++) {
      let char = String.fromCharCode(code)
      if (!(/[A-Z0-9]/i.test(char))) continue;
      validChars.push(char);
    };
    return validChars;
  })();

  let anonymize = function () {
    let displayName = '';
    for (let idx = 0; idx <= 15; idx++) {
      let char = VALID_CHARS[Math.floor(Math.random() * VALID_CHARS.length)];
      displayName += char;
    };
    return displayName;
  };

  let passwordValidator = function (passwordEntry) {
    return passwordEntry === password;
  }

  return {
    init(emailInput, passwordInput, firstNameInput, lastNameInput) {
      firstName = firstNameInput;
      lastName = lastNameInput;
      email = emailInput;
      password = passwordInput;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(passwordEntry) {
      if (passwordValidator(passwordEntry)) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(passwordEntry, newPassword) {
      if (passwordValidator(passwordEntry)) {
        password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(passwordEntry) {
      if (passwordValidator(passwordEntry)) {
        return firstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(passwordEntry) {
      if (passwordValidator(passwordEntry)) {
        return lastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(passwordEntry) {
      if (passwordValidator(passwordEntry)) {
        return email;
      } else {
        return 'Invalid Password';
      }
    },



  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(`displayName === fooBar.displayName // `, displayName === fooBar.displayName);   // logs false

let garyBar = Object.create(Account).init('gary@wat.com', 'abc', 'gary', 'steins');

console.log(garyBar.displayName)
console.log(`garyBar.firstName('abc') // `, garyBar.firstName('abc'));
console.log(`fooBar.firstName('abc') // `, fooBar.firstName('abc'));
