/* Here's a file that has the code that we want to modularize. */

const defaultPrompt = '>> '
let prompt = defaultPrompt;

function promptify(msg) {
  return prompt + msg;
}

function changePrompt(str) {
  prompt = str;
}

function restoreDefault() {
  prompt = defaultPrompt;
}

/* At the end, we add some additional code that exports the parts of the 
code that we want to use.

How does it really work? Who knows. All I knows is that there is this property named exports and its a property of object called module. Anyways, we are setting the exports property of module to reference a new object that contains properties that refer to our functions that we want to make available in other places. Also, kirby for good measure.

Note that we did not make all parts of our program available. Notably, we are leaving behind the defaultPrompt and prompt variables. These variables form the closures that we are exporting. So since the implementation details remain hidden, they are considered to be private state.
*/

module.exports = {
  promptify,
  changePrompt,
  restoreDefault,
  kirby: `<(' _ ')>`,
}

console.log(`exports: `, exports)