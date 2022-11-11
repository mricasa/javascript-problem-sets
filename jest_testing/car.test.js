const Car = require('./car');

describe('The Car class', () => {
  let car; // we need to declare the variable here so that our
           // tests have access to the object in its outer scope

  beforeEach(() => {
    car = new Car();
  })
  test('has four wheels', () => {
    expect(car.wheels).toBe(4);
  });

  test('two newly created cars are object equal', () => {
    let car1 = new Car();
    let car2 = new Car();

    expect(car1).toEqual(car2);
  });

  test('a newly created car does not have doors', () => {
    expect(car.doors).toBeUndefined();
  });

  test('raises an error when called drive on it', () => {
    expect(() => car.drive()).toThrow();
  });

  test('raises a TypeError when called drive on it', () => {
    expect(() => car.drive()).toThrow(TypeError);
  });

  test('a new car has no mileage info', () => {
    expect(car.mileageInfo).toBeNull();
  });

  test('wheels is truthy', () => {
    expect(car.wheels).toBeTruthy();
  });

  test('array contains car', () => {
    let arr = [1, 2, 3];
    arr.push(car);

    expect(arr).toContain(car);
  });

  test('car has wheels', () => {

    expect(car.wheels).not.toBeUndefined();
  });
});