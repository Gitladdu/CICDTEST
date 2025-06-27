const sum = require('./sum');

// Positive test
test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});

// Negative test
test('throws error if non-number input', () => {
  expect(() => sum('a', 2)).toThrow('Invalid input');
});


// No arguments
test('throws error if no arguments are passed', () => {
  expect(() => sum()).toThrow('Invalid input');
});

// One argument only
test('throws error if only one argument is passed', () => {
  expect(() => sum(5)).toThrow('Invalid input');
});

// Null argument
test('throws error if argument is null', () => {
  expect(() => sum(null, 2)).toThrow('Invalid input');
});

// Empty string
test('throws error if argument is empty string', () => {
  expect(() => sum('', 2)).toThrow('Invalid input');
});

