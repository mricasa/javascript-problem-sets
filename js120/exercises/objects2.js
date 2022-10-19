// const { setDefaultOptions } = require("readline-sync");

// let createStudent = function (name, year) {
//   return {
//     name,
//     year,
//     courses: [],

//     info() {
//       console.log(`${this.name} is a ${this.year} year student.`);
//     },

//     addCourse(course) {
//       this.courses.push(course);

//     },

//     listCourses() {
//       return this.courses;

//     },

//     addNote(courseCode, note) {
//       let selection = this.courses.filter((course) => {
//         return course.code === courseCode;
//       })[0];

//       if (selection.hasOwnProperty('note')) {
//         selection.note += ("; " + note);
//       } else {
//         selection.note = note;
//       }
//     },

//     updateNote(courseCode, note) {
//       let selection = this.courses.filter((course) => {
//         return course.code === courseCode;
//       })[0];

//       selection.note = note

//     },

//     viewNotes() {
//       for (course of this.courses) {
//         console.log(`${course.name}: ${course.note}`);
//       }
//     },
//   }
// }

// let school = {
//   VALID_YEARS: ['1st', '2nd', '3rd', '4th', '5th'],
//   students: [],

//   addStudent(name, year) {
//     if (this.VALID_YEARS.includes(year)) {
//       this.students.push(createStudent(name, year))

//     } else {
//       console.log(`Invalid year`);
//     }
//   },



//   enrollStudent(name, course) {
//     let selection = this.students.filter(student => {
//       return student.name === name;
//     })[0];

//     selection.addCourse(course);

//   },

//   addGrade(studentName, courseName, grade) {
//     let selection = this.students.filter(student => {
//       return student.name === studentName;
//     })[0];

//     let selectedCourse = selection.courses.filter((course) => {
//       return course.name === courseName;
//     })[0]

//     selectedCourse.grade = grade;

//   },

//   getReportCard(studentName) {
//     let selection = this.students.filter((student) => {
//       return student.name === studentName;
//     })[0];

//     selection.listCourses().forEach(course => {
//       if (course.hasOwnProperty('grade')) {
//         console.log(`${course.name}: ${course.grade}`);
//       } else {
//         console.log(`${course.name}: In progress`);
//       }
//     });
//   },
//   /*
//   Declare result, initialized to an empty array.

//   Iterate through list of students
//   See if the student is enrolled in the argued course name
//   If they do not have a grade, break
//   add student name and grade to result array

//   Print the name of the course
//   print the average
//    */
//   courseReport(courseName) {
//     let result = [];

//     for (let idx = 0; idx < this.students.length; idx++) {
//       let student = this.students[idx];
//       let selectedCourse = student.listCourses().filter((course) => {
//         return course.name === courseName
//       })[0];

//       if (!selectedCourse) break;
//       if (!selectedCourse.hasOwnProperty('grade')) break;
//       result.push([student.name, selectedCourse.grade])
//     }

//     if (result.length === 0) return;

//     console.log(`==${courseName}==`);
//     for (entry of result) {
//       console.log(`${entry[0]}: ${entry[1]}`);
//     }

//     let average = (result.reduce((sum, entry) => {
//       return sum + entry[1]
//     }, 0)) / result.length;
//     console.log('-----');
//     console.log(average);



//   },



// }



// school.addStudent('foo', '3rd');
// school.enrollStudent('foo', { name: 'Math', code: 101, })
// school.enrollStudent('foo', { name: 'Advanced Math', code: 102 })
// school.enrollStudent('foo', { name: 'Physics', code: 202, })

// school.addGrade('foo', 'Math', 95);
// school.addGrade('foo', 'Advanced Math', 90);

// school.addStudent('bar', '1st');
// school.enrollStudent('bar', { name: 'Math', code: 101, })
// school.addGrade('bar', 'Math', 91);


// school.addStudent('qux', '2nd');
// school.enrollStudent('qux', { name: 'Math', code: 101, })
// school.enrollStudent('qux', { name: 'Advanced Math', code: 102 })

// school.addGrade('qux', 'Math', 93);
// school.addGrade('qux', 'Advanced Math', 90);

// school.getReportCard('foo')
// school.courseReport('Math');


// // let foo = createStudent('Foo', '1st');
// // foo.info();
// // // "Foo is a 1st year student"
// // foo.listCourses();
// // // [];
// // foo.addCourse({ name: 'Math', code: 101 });
// // foo.addCourse({ name: 'Advanced Math', code: 102 });
// // foo.listCourses();
// // // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// // foo.addNote(101, 'Fun course');
// // foo.addNote(101, 'Remember to study for algebra');
// // foo.viewNotes();
// // // "Math: Fun course; Remember to study for algebra"
// // foo.addNote(102, 'Difficult subject');
// // foo.viewNotes();
// // // "Math: Fun course; Remember to study for algebra"
// // // "Advance Math: Difficult subject"
// // foo.updateNote(101, 'Fun course');
// // foo.viewNotes();
// // // "Math: Fun course"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"
// // // "Advanced Math: Difficult subject"


let createStudent = function (name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.listCourses().push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(courseCode, noteInput) {
      let selection = this.selectCourse(courseCode);
      if (selection.hasOwnProperty('note')) {
        selection.note += `; ${noteInput}`;
      } else {
        selection.note = noteInput;
      }
    },

    updateNote(courseCode, noteInput) {
      let selection = this.selectCourse(courseCode);
      selection.note = noteInput;

    },

    viewNotes() {
      this.listCourses().forEach((course) => {
        if (!course.hasOwnProperty('note')) return;
        console.log(`${course.name}:  ${course.note}`);
      })
    },

    selectCourse(courseCode) {
      return this.listCourses().filter(course => {
        return course.code === courseCode;
      })[0];
    },

    selectCourseName(courseName) {
      return this.listCourses().filter(course => {
        return course.name === courseName;
      })[0];

    }
  }
}

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
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
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();

let school = {
  VALID_YEARS: ['1st', '2nd', '3rd', '4th', '5th'],
  studentList: [],

  addStudent(name, year) {
    if (!this.VALID_YEARS.includes(year)) {
      console.log(`Invalid year`);
      return;
    }
    let newStudent = createStudent(name, year);
    this.studentList.push(newStudent);
    return newStudent;
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },

  addGrade(student, courseName, grade) {
    let selection = student.selectCourseName(courseName);
    selection.grade = grade;
  },

  getReportCard(student) {
    let courses = student.listCourses();
    courses.forEach((course) => {
      if (course.hasOwnProperty('grade')) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    })
  },

  listStudents() {
    return this.studentList;
  },


  courseReport(courseName) {

    let coursesFormat = this.listStudents().map(student => {
      let selection = student.selectCourseName(courseName);
      if (!selection) return;
      let grade = selection.grade || undefined;
      return { name: student.name, grade: grade };

    }).filter(entry => entry)
      .filter(entry => entry.grade);

    if (coursesFormat.length > 0) {
      console.log(`===${courseName} Grades===`);
      let average = coursesFormat.reduce((total, student) => {
        console.log(`${student.name}: ${student.grade}`);
        return total + student.grade;
      }, 0) / coursesFormat.length;
      console.log(`---`);
      console.log(`Course average: ${average}`);
    }

  },


}

// let foo = school.addStudent('foo', '3rd');
// school.enrollStudent(foo, 'Math', 101)
// school.enrollStudent(foo, 'Advanced Math', 102)
// school.enrollStudent(foo, 'Physics', 202)

// school.addGrade(foo, 'Math', 95)
// school.addGrade(foo, 'Advanced Math', 90)

// let bar = school.addStudent('bar', '1st');
// school.enrollStudent(bar, 'Math', 101);
// school.addGrade(bar, 'Math', 91);

// let qux = school.addStudent('qux', '2nd');
// school.enrollStudent(qux, 'Math', 101);
// school.enrollStudent(qux, 'Advanced Math', 102);
// school.addGrade(qux, 'Math', 93);
// school.addGrade(qux, 'Advanced Math', 90);


// school.getReportCard(foo)
// school.getReportCard(qux)

// school.courseReport('Math');
// school.courseReport('Advanced Math')
// school.courseReport('Physics')

/* Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output: */
// name property added to make objects easier to identify

Object.prototype.ancestors = function () {
  let parents = [];
  let ascend = function(obj) {
    let parent = Object.getPrototypeOf(obj);

    if (Object.getPrototypeOf(parent) === null) {
      parents.push('Object.prototype');
      return;

    } else {
      parents.push(parent.name);
      ascend(parent);
    };

  } 
  ascend(this)
  console.log(parents);
   
  


}



let foo = { name: 'foo' };
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']