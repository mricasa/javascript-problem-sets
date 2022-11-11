let { animalName, animalSpecies } = require('./petShopModule.js');
const Car = require('/Users/miri909/LS_backend/jest_testing/car.js');
const readline = require('readline-sync');
const {TodoList, Todo} = require('/Users/miri909/todolist_project/')

animalName('Carlo');
animalSpecies()

let civic = new Car();

console.log(`civic: `, civic)
// console.log(`module: `, module)

// console.log(`module: `, module)

// console.log(`Object.getOwnPropertyNames(readline) // `, Object.getOwnPropertyNames(readline))


let item1 = new Todo('wash the car')
console.log(`item1: `, item1)

console.log(`module: `, module)

let readlineIdx = module.children.findIndex(child => child.id.split('/').pop() === 'readline-sync.js');

console.log(`module.children[readlineIdx]: `, module.children[readlineIdx])

console.log(`require('readline-sync): `, require('readline-sync'));

console.log(`module: `, module)

console.log(`module.children[2].children // `, module.children[2].children)

console.log(`require: `, require)
