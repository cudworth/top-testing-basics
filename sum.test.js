const sum = require('./sum');

test('basic addition', () => {
  expect(sum(1, 2)).toBe(3);
});
