const caesarCipher = require('./caesarCipher');

test('basic caesar shift', () => {
  expect(caesarCipher(1, 'a')).toBe('b');
});

test('wrap test', () => {
  expect(caesarCipher(1, 'z')).toBe('a');
});

test('cap test', () => {
  expect(caesarCipher(1, 'A')).toBe('B');
});

test('punctuation test', () => {
  expect(caesarCipher(1, 'a.a')).toBe('b.b');
});

test('negative test', () => {
  expect(caesarCipher(-28, 'b')).toBe('z');
});
