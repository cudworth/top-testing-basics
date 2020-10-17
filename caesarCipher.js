function caesarCipher(offset, str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const arr = [];
  str.split('').forEach((char) => {
    const i = alpha.indexOf(char.toLowerCase());
    if (-1 != i) {
      const j = 0 < i + offset ? (i + offset) % 26 : 26 + ((i + offset) % 26);
      arr.push(isUpper(char) ? alpha[j].toUpperCase() : alpha[j]);
    } else {
      arr.push(char);
    }
  });
  return arr.join('');
}

function isUpper(char) {
  return char === char.toUpperCase();
}

module.exports = caesarCipher;
