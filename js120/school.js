function Course(name, code) {
  this.name = name;
  this.code = code;
}

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} student.`);
    },

    addCourse(course) {
      this.courses.push(course)
    },

    listCourses() {
      return this.courses;
    },

    selectCourse(courseCode) {
      return this.listCourses().filter(course => {
        return course.code === courseCode;
      }).shift();
    },
    
    selectCourseByName(courseName) {
      let selection =  this.listCourses().filter(course => {
        return course.name === courseName;
      }).shift();

      // console.log(`selection: `, selection)
      return selection;
      
    },

    addNote(code, note) {
      let selection = this.selectCourse(code);
      if (selection.hasOwnProperty('note')) {
        selection.note += `; ${note}`;
      } else {
        this.updateNote(code, note);
      }
      
    },
    
    updateNote(code, note) {
      let selection = this.selectCourse(code);
      if (selection) {
        selection.note = note; 
      }
    },

    viewNotes() {
      let courses = this.listCourses();
      for (const course of courses) {
        if (course.hasOwnProperty('note')) {
          console.log(`${course.name}: ${course.note}`);
        }
      }
    },
  }
}

const school = {
  VALID_YEARS: ['1st','2nd','3rd','4th','5th'],
  students: [],

  addStudent(name, year) {
    if (!(this.VALID_YEARS.includes(year))) {
      console.log('Invalid Year');
    } else {
      let student = createStudent(name, year);
      this.students.push(student);
      
      return student;
    }
  },
  
  listStudents() {
    return this.students;
  },

  selectStudent(name) {
    return this.listStudents().filter(student => {
      return student.name === name;
    }).shift();
  },

  enrollStudent(student, course) {
    student.addCourse(course);
  },

  addGrade(student, courseCode, grade) {
    let selection = student.selectCourse(courseCode);
    selection.grade = grade;
  },

  getReportCard(student) {
    let courses = student.listCourses();
    for (let course of courses) {
      console.log(`${course.name}: ${course.grade || 'In Progress'}`);
    }
  },

  courseReport(courseName) {
    let courseReportObj = {};

    function avg () {
      let grades = Object.values(courseReportObj);
      return grades.reduce((sum, grade) => {
        return sum + grade;
      }) / grades.length;
    }

    
    for (let student of this.students) {
      let selection = student.selectCourseByName(courseName);
      if (selection && selection.hasOwnProperty('grade')) {
        courseReportObj[student.name] = selection.grade;
      }
    }
    
    if (Object.keys(courseReportObj).length === 0) return undefined;
    
    console.log(`\n=${courseName} Grades=`);
    Object.keys(courseReportObj).forEach (student => {
      console.log(`${student}: ${courseReportObj[student]}`)
    });
    console.log('---');
    console.log(`Average: ${avg()}`)
    
  },
}

let foo = school.addStudent('foo', '3rd');

school.enrollStudent(foo, new Course('Math', 101));
school.enrollStudent(foo, new Course('Advanced Math', 102));
school.enrollStudent(foo, new Course('Physics', 202));
school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, new Course('Math', 101));
school.addGrade(bar, 101, 91);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, new Course('Math', 101));
school.enrollStudent(qux, new Course('Advanced Math', 102));
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90)

school.getReportCard(foo)
school.courseReport('Math')

school.courseReport('Advanced Math');
school.courseReport('Physics');
// let foo = createStudent('Foo', '1st');
// foo.info();
// console.log(`foo.listCourses(): `, foo.listCourses())

// foo.addCourse(new Course('Math', 101));
// foo.addCourse(new Course('Advanced Math', 102));
// console.log(`foo.listCourses(): `, foo.listCourses())

// foo.addNote(101, 'fun course')
// foo.addNote(101, 'remember to study for alegebra')
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// foo.updateNote(139 , 'Fun course');

// console.log(`\nfoo.viewNotes()`)
// foo.viewNotes();

