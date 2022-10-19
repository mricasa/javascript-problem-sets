class Pet {
  constructor(species, name) {
    this.species = species
    this.name = name;
  }

  describe() {
    return `a ${this.species} named ${this.name}`
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  acquire(pet) {
    this.pets.push(pet)
  }

  numberOfPets() {
    return this.pets.length;
  }

  getName() {
    return this.name;
  }

  getPets() {
    return this.pets; 
  }

  printPets() {
    let pets = this.getPets();
    console.log(`${this.getName()} has adopted the following pets: `);

    for (let pet of pets) {
      console.log(pet.describe());
    }
  }
}

class Shelter {
  constructor() {
    this.adopters = [];
  }

  adopt(owner, pet) {
    owner.acquire(pet);
    if (!this.getAdopters().includes(owner)) {
      this.adopters.push(owner)
    }
  }

  getAdopters() {
    return this.adopters;
  }

  printAdoptions() {
    this.getAdopters().forEach(owner => {
      owner.printPets();
      console.log("");
    });

    this.getAdopters().forEach(owner => {
      console.log(`${owner.getName()} has adopted ${owner.numberOfPets()} pets`)
    })
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();

// shelter.printOwnersAdoptions(phanson)