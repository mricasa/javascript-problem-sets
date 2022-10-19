function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function (timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning': ``
          msg += `${pokemon.morning} ${pokemon.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let pokemon = createGreeter('Victor');
pokemon.greet('morning');

/* > 
let helloVictor = createGreeter('Victor');
> helloVictor.greet('morning');
= Good Morning Victor

The reason why the above code woult not work ...
The reason why the above code will not work is that is that we are not referencing the properties name and morning off of the calling object. In this code, we are instructing JS to lookup local or global variables by th ename of morning / afternoon / evening rather than the desired property.

When we want to reference a property name we must use the full syntax for accessing that property (use of member access (or computed memer access) notation). That is, we must lead with the name that references the object on one side of the period, and then the name of the property after the period. 

While it may all be well and good to use the name of variable that would reference the object within the function createGreeter, such as "helloVictor.morning", our limitation is that this function factory createGreeter would only be compatible with that name. 

So in OOP, we can use a keyword this, that would be bound to the execution context of a function call. 

Thus, if we prepend this to our ...

hm... come back to this. It is probably also critical to mention that it is iportant to use the keyword this inside of functions




*/

/* Buggy Code 2 
A grocery store uses a JavaScript function to calculate discounts on various items. They are testing out various percentage discounts but are getting unexpected results. Go over the code, and identify the reason why they aren't getting the expected discounted prices from the function. Then, modify the code so that it produces the correct results.*/

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function (percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;

  },
};

console.log(item.discount(50))   // should return 25
// 20
console.log(item.discount(20))   // should return 40
// 40
console.log(item.discount(25))   // should return 37.5
// 15

/* THe issue in this code is that we are setting the property price each time we cal the function referenced by discount. The value set by the method call would be the discounted price, such that subsequent invocations would be operating with the discounted price instead of the original base price. 

In some sense, whether or not this is correct depends on the use case. That is, perhaps, the designers of this system would like the price property to be updated when calling discount.

The easiest way, however, to fix this would be to simply return the value that results from subtracting the discounted amount from the price property without updating the property itself.

    return this.price - discount;

*/

/* 
Testing Object Equality

In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates as true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs. 

Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs. */

let objectsEqual = function (objA, objB) {
  let aKeys = Object.keys(objA);
  let bKeys = Object.keys(objB);

  if (aKeys.toString() !== bKeys.toString()) return false;

  return aKeys.every(key => {
    return objA[key] === objB[key];
  })
}

// yeah this works, but try without using the JSON module too later

console.log(objectsEqual({ a: 'foo' }, { a: 'foo' }));                      // true
console.log(objectsEqual({ a: 'foo', b: 'bar' }, { a: 'foo' }));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({ a: 'foo', b: undefined }, { a: 'foo', c: 1 }));  // false

/* 
Student

Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

    info: Logs the name and year of the student.
    addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
    listCourses: Returns a list of the courses student has enrolled in.
    addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
    updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
    viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.


Re-attempt this

class student
attributes
- name
- year
- courses
  - list of course objects
    - course
      - name
      - code
      - notes

methods
- info
- addCourse
- listCourses
- addNote
- updateNote
- viewNotes
 */

createStudent = function (name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course)
    },

    selectCourse(courseCode) {
      let selection = this.courses.filter(course => {
        return course.code === courseCode;
      });

      return (selection.length > 0) ? selection.pop() : null;

    },

    updateNote(courseCode, noteInput) {
      let selection = this.selectCourse(courseCode);
      if (!selection) return;
      selection.note = noteInput;

    },
    addNote(courseCode, noteInput) {
      let selection = this.selectCourse(courseCode);
      if (!selection) return;

      if (selection.hasOwnProperty('note')) {
        selection.note += `; ${noteInput}`;
      } else {
        selection.note = noteInput;
      }
    },


    viewNotes() {
      this.courses.forEach(course => {
        if (course.hasOwnProperty('note')) {
          console.log(`${course.name}: ${course.note}`)
        };
      })
    },
  }
}

// let foo = createStudent('Foo', '1st');
// foo.info();
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();


/* 
School

Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

addStudent: adds a student by creating a new student and adding the student to a collection of students. 
  - Constrains year to certain values
  - Log invalid year otherwise

enrollStudent: Enroll a student in a course
addGrade: Adds a grade of a student for a course

getReportCard: logs the grades of student for all courses. If the course has no grade, it uses 'in progress'

courseReport: Logs the grades of all studnets for a given course name. Only students with grades are in the report
*/

let school = {
  VALID_YEARS: ['1st', '2nd', '3rd', '4th', '5th'],
  students: [],

  addStudent(name, year) {
    if (!this.VALID_YEARS.includes(year)) {
      console.log(`Invalid year`);
    } else {
      this.students.push(createStudent(name, year))
    }
  },

  findStudent(studentName) {
    return this.students.find(student => {
      return student.name === studentName;
    })
  },

  // findCourse(student, courseCode) {
  //   student.selectCourse
  // },
  
  enrollStudent(studentName, course) {
    let student = this.findStudent(studentName);
    if (student) {
      student.addCourse(course);
    }
  },

  addGrade(studentName, courseCode, inputGrade) {
    let student = this.findStudent(studentName);
    let course = student.selectCourse(courseCode);
    if (student && course) {
      course.grade = inputGrade
    }
  },

  getReportCard(studentName) {
    let student = this.findStudent(studentName);
    if (student) {
      student.listCourses().forEach(course => {
        if (course.hasOwnProperty('grade')) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      })
    }
  },

  courseReport(courseName) {
    for (student of this.students) {
      ;
    }
  },
}

school.addStudent('foo', '3rd');
school.enrollStudent('foo', { name: 'Math', code: 101})
school.enrollStudent('foo', { name: 'Advanced Math', code: 102})
school.enrollStudent('foo', { name: 'Physics', code: 202})
school.addGrade('foo', 101, 95)
school.addGrade('foo', 102, 90)

school.addStudent('bar', '1st');
school.enrollStudent('bar', { name: 'Math', code: 101})
school.addGrade('bar', 101, 91)




school.addStudent(`qux`, `2nd`);
school.enrollStudent('qux', { name: 'Math', code: 101})
school.enrollStudent('qux', { name: 'Advanced Math', code: 102})
school.addGrade('qux', 101, 93)
school.addGrade('qux', 102, 90)





console.log(`hello world`);

