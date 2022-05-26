// JS100 JS Basics: Variable Scope- What's my value?

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a); // => ReferenceError: Cannot access 'a' before initialization
    let a = 2;
    console.log(a);
  }
}

myFunction();

