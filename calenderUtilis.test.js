const leapyear = require('./calenderUtilis');

// Q5. Write a JavaScript function ( both regular and arrow function) which takes year as parameter to determine and print whether a given year is a leap year or not. Try using ternary operator

test('determine whether a given year is a leap year or not', () => {
  expect(leapyear(2000)).toEqual(true);
});

test('determine whether a given year is a leap year or not', () => {
  expect(leapyear(1993)).toEqual(false);
});

test('determine whether a given year is a leap year or not', () => {
  expect(leapyear(1996)).toEqual(true);
});

test('determine whether a given year is a leap year or not', () => {
  expect(leapyear(1997)).toEqual(false);
});