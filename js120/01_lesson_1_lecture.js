/* 
====================================================================
Creating Objects
====================================================================
*/


let person = {
  name: 'john',
  age: 33,
}

console.log(`person: `, person);

// Imagine you're building a car racing game...

/*
Car Attributes
  Make: BMW
  Fuel level: 50%
  Engine status: Turned Off

Car Functionality/Behavior
  Start engine
  Stop engine
  Refuel
  Drive
*/

let raceCar = {
  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  
  drive() {
    this.fuelLevel -= 0.1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  },
}

console.log(`raceCar.fuelLevel: `, raceCar.fuelLevel)
console.log('Let\'s refuel...');
raceCar.refuel(30);
console.log(`raceCar.fuelLevel: `, raceCar.fuelLevel)


/* 
====================================================================
Collaborator Objects
====================================================================
*/

let michael = {
  name: 'Michael',

  printName() {
    console.log(`My name is ${this.name}`);
  },
};

michael.printName();


// States can be any value, even other objects. In this example,
// pete has a property pet that is assigned to the object
// referenced by cat.

let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pet: cat,

  printName() {
    console.log(`My name is ${this.name}!`);
    console.log(`My pet's name is ${this.pet.name}`);
  },
};

pete.printName();

// We can also call methods that belong to the property pet 
// by way of referencing the cat object through pete.

pete.pet.makeNoise();

let snail = {
  name: 'Gary',
  noise() {
    console.log('meow')
  }
}

let sponge = {
  name: 'SpongeBob',
  pet: snail,
  greet() {
    console.log(`My name is ${this.name}. I have a pet named ${this.pet.name}`)
  } 
}

sponge.greet();

// We can call the snail method noise by accessing the value of
// the pet property from sponge... 

sponge.pet.noise();

/* 
====================================================================

Functions as Object Factories

====================================================================
*/

raceCar = {
  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= 0.1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  },
};

/*
In the above code, we show the skeleton of the createCar function. Try to implement createCar on your own, then use it to create a new race car with the following details:

Make: Jaguar
Fuel Level: 0.4
Engine Status: off

*/

function createCar(make, fuelLevel, engineOn) {
  return {
    make: make,
    fuelLevel: fuelLevel,
    engineOn: engineOn,
  
    startEngine() {
      this.engineOn = true;
    },
  
    
    drive() {
      this.fuelLevel -= 0.1;
    },
  
    stopEngine() {
      this.engineOn = false;
    },
  
    refuel(percent) {
      if ((this.fuelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        this.fuelLevel = 1;
      }
    },
  }
};

let raceCar3 = createCar('Jaguar', 0.4, false);
raceCar3.drive();
console.log(`raceCar3.fuelLevel: `, raceCar3.fuelLevel);

/* 
====================================================================

Practice Problems: Objects and Factories

====================================================================
*/


/*
In these problems, we will develop a factory function for objects that represent books.

The following three books should give you an idea of what our first book object should look like:

Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description

*/

console.log("==========================");


const createBook = (title, author, read = false) => {
  return {
    title,
    author,
    read,
    
    readBook() {
      this.read = true;
    },

    getDescription() {
      return `${this.title} was written by ${this.author}. ` +
              `I ${this.read ? "have" : "haven't" } read it.`;
    },

  };
}





let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris')
let book3 = createBook('Aunts aren\'t Gentlemen', 'PG Wodehouse');
book3.read = true;

let library = [book1, book2, book3];

for (book of library) {
  console.log(book.getDescription());

}

/* 
f6
up
return
f6
f6
f6
f6
*/