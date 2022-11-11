class Meetup {
  static DESCRIPTOR_CODES = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    last: 'last',
    teenth: 'teenth',
  }

  static DAYS_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
    this.startOfMonth = new Date(this.year, this.month);
    this.nextMonth = new Date(this.year, this.month + 1);
  }

  day(targetDayOfWeek, descriptor) {
    targetDayOfWeek = Meetup.DAYS_OF_WEEK.indexOf(targetDayOfWeek.toLowerCase());
    descriptor = Meetup.DESCRIPTOR_CODES[descriptor.toLowerCase()];

    let resultDate = null;

    switch (descriptor) {
      case 1:
        resultDate = this.firstOfMonth.call(this, targetDayOfWeek);
        break;
      case 'last':
        resultDate = this.lastOfMonth.call(this, targetDayOfWeek);
        break;
      case 'teenth':
        resultDate = this.teenthOfMonth.call(this, targetDayOfWeek);
        break;
      default:
        resultDate = this.positionInMonth.call(this, targetDayOfWeek, descriptor);
        break;
    }

    return resultDate;

  }

  positionInMonth(targetDayOfWeek, descriptor) {
    let currentDate = new Date(this.startOfMonth);

    let firstDateWithTargetDay = null;
    let result = null;

    while (true) {
      if (currentDate.getDay() === targetDayOfWeek) {
        firstDateWithTargetDay = currentDate.getDate();
        break;
      }
      this.incrementDate(currentDate);
    }
    let targetDate = firstDateWithTargetDay + (7 * (descriptor - 1));

    currentDate.setDate(targetDate);
    if (currentDate >= this.nextMonth) return null;

    return currentDate;
  }

  firstOfMonth(targetDayOfWeek) {
    let currentDate = new Date(this.startOfMonth);

    while (true) {
      if (currentDate.getDay() === targetDayOfWeek) {
        break;
      }
      this.incrementDate(currentDate);
    }
    return currentDate;
  }

  lastOfMonth(targetDayOfWeek) {
    let currentDate = new Date(this.nextMonth);
    this.incrementDate(currentDate, -1);

    while (true) {
      if (currentDate.getDay() === targetDayOfWeek) {
        break;
      }
      this.incrementDate(currentDate, -1);
    }

    return currentDate;
  }

  teenthOfMonth(targetDayOfWeek) {
    let currentDate = new Date(this.startOfMonth);

    while (true) {
      if (currentDate.getDay() === targetDayOfWeek &&
        currentDate.getDate() >= 13) {
        break;
      }
      this.incrementDate(currentDate);
    }
    return currentDate;
  }

  incrementDate(date, factor = 1) {
    date.setDate(date.getDate() + factor);
  }
}

module.exports = Meetup;


function dateAsString(year, month, day) {
  let date = new Date(year, month - 1, day);
  return date.toString();
}

let meetup
let expected

//  meetup = new Meetup(2013, 3);
//  expected = dateAsString(2013, 3, 4);
// console.log(`expected: `, expected)

// let result = meetup.day('Monday', 'last');

// console.log(`result: `, result)

meetup = new Meetup(2014, 3);
expected = dateAsString(2014, 3, 14);
console.log(`meetup.day('Friday', 'second').toString() // `, meetup.day('Friday', 'second').toString());