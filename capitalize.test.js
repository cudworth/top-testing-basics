const capitalize = require('./capitalize');

test('happy path', () => {
  expect(capitalize('test string')).toBe('Test string');
});
