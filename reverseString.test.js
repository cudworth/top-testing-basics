const reverseString = require('./reverseString');

test('No test', () => {
  expect(reverseString('abcdefghijklmnopqrstuvwxyz')).toBe(
    'zyxwvutsrqponmlkjihgfedcba'
  );
});
