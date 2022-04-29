// Psuedocode
// Ask the user for the first number
// Ask the user for the second number
// Ask user for the operation
// Perform the operation
// Display the result of the operation

const readline = require('readline-sync');
const msg = require('./calculator_messages.json');
let language;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(msg.global.languageChoice);
let languageChoice = readline.question();

while (!['1', '2'].includes(languageChoice)) {
  prompt(msg.global.inputError);
  languageChoice = readline.question();
}

switch (languageChoice) {
  case '1':
    language = 'en';
    break;
  case '2':
    language = 'sp';
    break;
}

prompt(msg[language].welcome);


while (true) {
  prompt(msg[language].first);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(msg[language].invalidNumber);
    number1 = readline.question();
  }

  prompt(msg[language].second);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(msg[language].invalidNumber);
    number2 = readline.question();
  }

  prompt(msg[language].operationChoice);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(msg[language].invalidOperation);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(msg[language].result + output);
  prompt(msg[language].again);
  let sessionChoice = readline.question().toLowerCase();

  while (!['y', 'n'].includes(sessionChoice)) {
    prompt(msg[language].invalidGeneral);
    sessionChoice = readline.question().toLowerCase();
  }

  if (sessionChoice === 'n') {
    prompt(msg[language].end);
    break;
  }

}