const sum = require('./sum');

// Positive test
test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});

// Negative test
test('throws error if non-number input', () => {
  expect(() => sum('a', 2)).toThrow('Invalid input');
});
