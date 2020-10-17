const calculator = require('./calculator');

test('Addition', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Subtraction', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('Multiplication', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('Division', () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});
