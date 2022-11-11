

class Clock {
  static at(hour, minutes) {
    return new Clock(hour, minutes || 0);
  }

  static MINS_TO_HR = 60;
  static HOURS_TO_DAY = 24;
  static MINS_TO_DAY = 1440;
  static HOURS = [...Array(Clock.HOURS_TO_DAY).keys()].map((_, idx) => idx);
  static MINUTES = [...Array(Clock.MINS_TO_HR).keys()].map((_, idx) => idx);


  constructor(hour, minutes) {
    this.hour = hour;
    this.minutes = minutes;
  }

  toString() {
    return `${String(this.hour).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}`;
  }

  add(minutesInput) { // works well!
    let [hours, minutes] = this.convertToHoursAndMins(minutesInput);
    if (!this.validRangeMinutes(minutes)) hours += 1;

    let currentMinutesIdx = Clock.MINUTES.indexOf(this.minutes);
    let newMinutesIdx = (currentMinutesIdx + minutes) % Clock.MINUTES.length;

    let currentHoursIdx = Clock.HOURS.indexOf(this.hour);
    let newHoursIdx = (currentHoursIdx + hours) % Clock.HOURS.length;

    this.minutes = Clock.MINUTES[newMinutesIdx];
    this.hour = Clock.HOURS[newHoursIdx];

    return this;
  }

  subtract(minutesInput) {


    let [hours, minutes] = this.convertToHoursAndMins(minutesInput);

    if (!this.validRangeMinutes(-minutes)) hours += 1;


    let currentMinutesIdx = Clock.MINUTES.indexOf(this.minutes);
    let adjustedMinutes = currentMinutesIdx - minutesInput;

    let newMinutesIdx = adjustedMinutes < 0 ?
      (Clock.MINUTES.length + (adjustedMinutes) % Clock.MINUTES.length) :
      (adjustedMinutes) % Clock.MINUTES.length;

    let currentHoursIdx = Clock.HOURS.indexOf(this.hour);

    let adjustedHours = currentHoursIdx - hours;

    let newHoursIdx = adjustedHours < 0 ?
      (Clock.HOURS.length +
       ( adjustedHours % Clock.HOURS.length)) :
      adjustedHours % Clock.HOURS.length;

    this.minutes = Clock.MINUTES[newMinutesIdx];
    this.hour = Clock.HOURS[newHoursIdx];

    return this;
  }

  convertToHoursAndMins(minutesInput) {
    let minutes = minutesInput % Clock.MINS_TO_DAY;
    let hours = Math.floor(minutes / Clock.MINS_TO_HR);
    minutes %= Clock.MINS_TO_HR;

    return [hours, minutes];
  }
  validRangeMinutes(mins) {
    return this.minutes + mins > 0 && this.minutes + mins < 60;
  }

  isEqual(anotherClock) {
    let { hour, minutes } = anotherClock;
    return this.hour === hour && this.minutes === minutes;
  }
}
module.exports = Clock;


