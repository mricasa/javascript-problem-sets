/*
Assignment: Mortgage / Car Loan Calculator
Take everything that you've learned so far and build a mortgage calculator
(or car payment calculator -- it's the same thing).

You'll need three pieces of information:

the loan amount
the Annual Percentage Rate (APR)
the loan duration

From the above, you'll need to calculate the following two things:

monthly interest rate
loan duration in months

You can use the following formula:
M = P( J / (1 - Math.pow(1 + J, (-n))) )
let m = p * (j / (1 - Math.pow((1 + j), (-n))));

m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

When you write your program, don't use the single-letter variables m, p,
j, and n; use explicit names. For instance, you may want to use loanAmount
instead of p.

Try to print the payment amount as a dollar and cents amount, e.g., $123.45
or $371.00.

Finally, don't forget to run your code through ESLint. Also, consider asking
for a code review after you've reviewed your code against the possible solution,
and made any adjustments that you need to make.

Hints:

Decide what input formats your program expects. For example, should the user
enter an interest rate of 5% as 5 or .05?

If you're working with an Annual Percentage Rate (APR), you need to convert
it to a monthly interest rate for use in the formula.

Be careful about the loan duration -- are you working with months or years?
Choose variable names carefully to assist in remembering.

Think about edge cases. There are plenty of edge cases to work with in this
problem, and each presents interesting challenges. For instance, consider
whether you want to support no-interest loans or loans that aren't for an
integer number of years.

You can use this loan calculator to check your results.

============
Requirements
============
User inputs for
-loan amount
-apr
-duration (years)
will need to calculate number of months for input years

output is the monthly payment printed it $00.00

============
Pseudocode
============

Prompt function
year to months converter function
Monthly payment calc function
confirmation function

expected inputs
-loan amount as float
-apr as float
- years as integer years

user interface to include symbols in prompt:
- ___%
- $___

PROMPT How much money is your loan?
confirmation of input
LET loan and init to response

PROMPT What is the APR?
Validation of APR
- Is it a number?
- multiply by *.01
confirmation of input
LET apr and init to response

PROMPT What is the loan duration?
confirmation of input
LET durationYears and init to response

convert years to months
pass to monthly payment calculator
extract return value to result variable

PROMPT result message
- return value should be toFixed(2)
- prepend dollar sign

*/

let readline = require('readline-sync');

let prompt = function(words) {
  console.log('==> ' + words);
};

let monthlyPayment = function(amount, apr, months) {
  let mpr = apr / 12;
  return amount * (mpr / (1 - Math.pow((1 + mpr), (-months))))
    .toFixed(2);
};

let yearToMonths = year => Number(year) * 12;
let durationYears;
let apr;
let amount;

let confirm;

do {
  prompt('What is the loan amount? $____');
  amount = readline.question();

  while (!parseInt(amount, 10)) {
    prompt("Invalid response. Please try again");
    amount = readline.question();
  }

  amount = Math.abs(amount).toFixed(2);

  prompt(`You entered $${amount}. Is that correct?`);
  prompt("Please enter 'y' or 'n'");
  confirm = readline.question();

  while (!['y', 'n'].includes(confirm)) {
    prompt("Invalid response. Please try again");
    confirm = readline.question();
  }
} while (confirm === 'n');

confirm = '';

do {
  prompt('What is the APR? %___');
  apr = readline.question();

  while (!parseFloat (apr, 10)) {
    prompt("Invalid response. Please try again");
    apr = readline.question();
  }

  apr = (Math.abs(apr) * 0.01);

  prompt(`You entered ${(apr * 100).toFixed(2)}%. Is that correct?`);
  prompt("Please enter 'y' or 'n'");
  confirm = readline.question();

  while (!['y', 'n'].includes(confirm)) {
    prompt("Invalid response. Please try again");
    confirm = readline.question();
  }
} while (confirm === 'n');

confirm = '';

do {
  prompt('How long is your loan duration in years?');
  durationYears = readline.question();

  while (!parseInt(durationYears, 10)) {
    prompt("Invalid response. Please try again");
    durationYears = readline.question();
  }

  durationYears = Math.abs(durationYears).toFixed(0);

  prompt(`You entered ${durationYears} years. Is that correct?`);
  prompt("Please enter 'y' or 'n'");
  confirm = readline.question();

  while (!['y', 'n'].includes(confirm)) {
    prompt("Invalid response. Please try again");
    confirm = readline.question();
  }
} while (confirm === 'n');

let durationMonths = yearToMonths(durationYears);
let monthly = monthlyPayment(amount, apr, durationMonths);

prompt(`Your monthly payment will be $${monthly}.`);

// Would love to refactor this sometime.
// Invalid response can be extracted i think.
// and user confirmation
