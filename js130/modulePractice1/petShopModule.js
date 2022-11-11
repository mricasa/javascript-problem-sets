var animal = 'Dog';

function animalName(name) {
  logDate.call(this);
  console.log(`${name} is a ${animal}`)
}

function logDate() {
  var date = new Date();
  console.log("Today's date is: ", date)
}

function animalSpecies() {
  console.log(`The species of animal is a ${animal}`);
}

module.exports = { animalName, animalSpecies,};