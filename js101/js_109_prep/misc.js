// // JS100 JS Basics: Variable Scope- What's my value?

// // function myFunction() {
// //   let a = 1;

// //   if (true) {
// //     console.log(a); // => ReferenceError: Cannot access 'a' before initialization
// //     let a = 2;
// //     console.log(a);
// //   }
// // }

// // myFunction();

// // a change

// /** You should use validation checks when you cannot guarantee that the data passed into a function will be valid. For instance, if we aren't sure if the data being passed might be an empty array or wrong data type, we want to create a guard clause to handle that.
//  *
//  */

// // let zoo  = [
// //   {trex: 1, raptors: 3, lions: 4},
// //   {rabbits: 4, zebra: 3, gazelle: 10},
// //   {monkeys: 4}
// // ]

// // let zooSelect = zoo.filter(animalPen => {
// //   return Object.keys(zoo).some(animal => 'lions');
// // })

// // console.log(zooSelect[0] === zoo[0])


// // ///////////////////////////////////////////////////////////////////////////////
// // I was studying this using some other curriculum, so this is easy.
// // not sure if I could get it otherwise.

// // function fibonacci(n) {
// //   if (n <= 2) return 1;
// //   return fibonacci(n - 1) + fibonacci(n - 2);
// // }

// // console.log(fibonacci(1));       // 1
// // console.log(fibonacci(2));       // 1
// // console.log(fibonacci(3));       // 2
// // console.log(fibonacci(4));       // 3
// // console.log(fibonacci(5));       // 5
// // console.log(fibonacci(12));      // 144
// // console.log(fibonacci(20));      // 6765

// ///////////////////////////////////////////////////////////////////////////////
// /*
// Fibonacci Numbers (Procedural)
// In the previous exercise, we developed a recursive solution for computing
// the nth Fibonacci number. In a language that is not optimized for
// recursion, some (but not all) recursive functions can be extremely
// slow and may require massive quantities of memory and/or stack space.
// If you tested for bigger nth numbers, you might have noticed that
// getting the 50th fibonacci number already takes a significant amount of
// time.

// Fortunately, every recursive function can be rewritten as a
// non-recursive (or procedural) function.

// Rewrite your recursive fibonacci function so that it computes its
// results without using recursion.

// 1, 1, 2, 3

// */
// ///////////////////////////////////////////////////////////////////////////////
// // function fibonacci(number) {
// //   let resultArr = [1, 1];
// //   let position = 3;
// //   while (position <= number) {
// //     let firstTerm = resultArr[resultArr.length - 1];
// //     let secondTerm = resultArr[resultArr.length - 2];
// //     resultArr.push(firstTerm + secondTerm);
// //     position++;
// //   }
// //   return resultArr.pop();
// // }

// // // LS solution.
// // // not pushing to an array, but dynamically updating the elements of the
// // // array.

// // function fibonacci(number) {
// //   let previousTwo = [1, 1];
// //   for (counter = 3; counter <= number; counter++) {
// //     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
// //   }
// //   return previousTwo[1];

// // }

// // console.log(fibonacci(1));       // 1
// // console.log(fibonacci(2));       // 1
// // console.log(fibonacci(3));       // 2
// // console.log(fibonacci(4));       // 3
// // console.log(fibonacci(20));       // 6765
// // console.log(fibonacci(50));       // 12586269025
// // console.log(fibonacci(75));       // 2111485077978050

// ///////////////////////////////////////////////////////////////////////////////
// // Fibonacci Numbers (Memoization)
// // Our recursive fibonacci function from an earlier exercise isn't very
// // efficient. It starts slowing down with an nth argument value as low as
// // 35. One way to improve the performance of our recursive fibonacci function
// // (and other recursive functions) is to use memoization.

// // Memoization is an approach that involves saving a computed answer for future
// // reuse, instead of computing it from scratch every time it is needed. In the
// // case of our recursive fibonacci function, using memoization saves calls to
// // fibonacci(nth - 2) because the necessary values have already been computed
// // by the recursive calls to fibonacci(nth - 1).

// // For this exercise, your objective is to refactor the recursive fibonacci
// // function to use memoization.

// ///////////////////////////////////////////////////////////////////////////////


// // let fibonacciMemo = {};

// // function fibonacci(n) {
// //   if (n <= 2) return 1;
// //   if (fibonacciMemo[n]) {
// //     return fibonacciMemo[n];
// //   } else {
// //     fibonacciMemo[n] = fibonacci(n - 1) + fibonacci(n - 2);
// //     return fibonacciMemo[n];
// //   }
// // }


// // console.log(fibonacci(1));       // 1
// // console.log(fibonacci(2));       // 1
// // console.log(fibonacci(3));       // 2
// // console.log(fibonacci(4));       // 3
// // console.log(fibonacci(5));       // 5
// // console.log(fibonacci(12));      // 144
// // console.log(fibonacci(20));      // 6765
// // console.log(fibonacci(39));      // 63245986
// // console.log(fibonacci(1000));    // 4.346655768693743e+208

// const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
//   'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
//   'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
//   'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
//   'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
//   'with', 'yield'];

// function isReserved(name) {
//   for (let idx = 0; idx < RESERVED_KEYWORDS.length; idx++) {
//     let reserved = RESERVED_KEYWORDS[idx];
//     if (name === reserved) return true;
//     else return false;
//   }

//   return false;
// }

// console.log(isReserved('monkey')); // false
// console.log(isReserved('patch'));  // false
// console.log(isReserved('switch')); // should be: true


// function foo(x) {
//   return x;
// }

// function bar(baz) {
//   baz(1);
//   baz(2);
//   return 3;
// }

// console.log(bar(function(x) {
//   return x;
// }));

// // Picks n random elements from an array,
// // and returns a new array with those elements.
// function random(array, n) {
//   if (n === undefined) {
//     n = 1;
//   }

//   let elements = array.slice();
//   let randomElements = [];

//   while (n > 0 && elements.length > 0) {
//     let randomIndex = Math.floor(Math.random() * elements.length);
//     let randomElement = elements[randomIndex];

//     randomElements.push(randomElement);
//     elements.splice(randomIndex, 1);
//     n--;
//   }

//   return randomElements;
// }

// Ingredients

// function random(array, n) {
//   if (n === undefined) {
//     n = 1;
//   }

//   let elements = array.slice();
//   let randomElements = [];

//   while (n > 0 && elements.length > 0) {
//     let randomIndex = Math.floor(Math.random() * elements.length);
//     let randomElement = elements[randomIndex];

//     randomElements.push(randomElement);
//     elements.splice(randomIndex, 1);
//     n--;
//   }

//   return randomElements;
// }


// let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
//   'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

// let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
//   'poppy seed', 'cumin'];

// let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// // Name

// let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
// let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
// let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// // Generate!

// let dishName = random(adjective).concat(random(firstNoun), random(secondNoun));
// let dish = random(ingredients, 3).concat(random(spices, 2), random(extras, 1));

// console.log('How about: ' + dishName.join(' '));
// // console.log('You need: ' + dish.join(', '));

// let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
//              'call plumber', 'feed fido', 'get gas',  'organize closet'];

// function addTask(task) {
//   if (todos.includes(task)) {
//     console.log('That task is already on the list.');
//   } else {
//     todos.push(task);
//   }
// }

// function completeTasks(n = 1) {
//   let tasksComplete = 0;

//   while (todos.length > 0 && tasksComplete < n) {
//     console.log(`${todos[0]} complete!`);
//     todos.shift();
//     tasksComplete++;
//   }

//   if (todos.length === 0) {
//     console.log('All tasks complete!');
//   } else {
//     console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
//   }
// }

// function displayTaskList() {

//   console.log(`ToDo list (${todos.length} tasks):`);
//   console.log('---------------------');

//   for (let idx = 0; idx < todos.length; idx++) {
//     console.log(`-- ${todos[idx]}`);
//   }
// }

// // Utilizing our task manager

// addTask('oil change');
// addTask('dentist');
// addTask('homework');

// completeTasks(3);
// displayTaskList();


// let memberDirectory = {
//   'Jane Doe': '323-8293',
//   'Margaret Asbury': '989-1111',
//   'Callum Beech': '533-9090',
//   'Juanita Eastman': '424-1919',
// };

// function isValidName(name) {
//   return (/^[A-z]+ [A-z]+$/).test(name);
// }

// function isValidPhone(phone) {
//   return (/^\d{3}-\d{4}$/).test(phone);
// }

// function validMemberInfo(name, phone) {
//   return isValidName(name) && isValidPhone(phone);
// }

// function addMember(name, phone) {
//   if (validMemberInfo(name, phone)) {
//     memberDirectory[name] = phone;
//   } else {
//     console.log('Invalid member information.');
//   }
// }

// addMember('Laura Carlisle', '444-2223');
// addMember('Rachel Garcia', '232-1191');
// addMember('Earl 5mith', '331-9191');
// addMember('Earl5mith Puck', '331-9191');

// console.log(memberDirectory);


// function toDate(string) {
//   return new Date(string + "T00:00:00");
// }

// const TODAY = toDate("2018-08-05"); 

// function toString(date) {
//   let formatLeadZero = (month) => ('0' + month).slice(-2); 
//   return `${date.getFullYear()}-${formatLeadZero(date.getMonth() + 1)}-${formatLeadZero(date.getDate())}`;
// }

// function isInThePast(date) {
//   return date < TODAY;
// }

// function isWeekday(date) {
//   return date.getDay() >= 1 && date.getDay() <= 5;
// }

// let myCalendar = {
//   "2018-08-13": ["JS debugging exercises"],
//   "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
//   "2018-08-15": ["Read 'Demystifying Rails'"],
//   "2018-08-16": [],
//   "2018-08-30": ["Drone video project plan"],
//   "2018-09-10": ["Annual servicing of race bike"],
//   "2018-09-12": ["Study"],
//   "2018-11-02": ["Birthday Party"],
//   "2018-11-03": ["Birthday Party"]
// };

// let offeredClasses = {
//   "Back To The Future Movie Night": ["2018-07-30"],
//   "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
//   "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
//   "Mike's Hikes": ["2018-08-16"],
//   "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
//   "Powerboating 101": ["2018-09-15", "2018-09-16"],
//   "Discover Parachuting": ["2018-11-02"]
// };

// function getCompatibleEvents(classes, calendar) {
//   function isAvailable(date) {
//     let dateStr = toString(date);
//     return !calendar[dateStr] || calendar[dateStr].length === 0;
//   }

//   let compatibleClasses = [];

//   Object.keys(classes).forEach(className => {
//     let classDates = classes[className].map(toDate);

//     if (classDates.some(isInThePast)) {
//       return;
//     }

//     if (classDates.filter(isWeekday).every(isAvailable)) { 
//       compatibleClasses.push(className);
//     }
//   });

//   return compatibleClasses;
// }

// console.log(getCompatibleEvents(offeredClasses, myCalendar));
// // expected: ["Mike's Hikes", "Powerboating 101"]



