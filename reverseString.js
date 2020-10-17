function reverseString(str) {
  const arr = [];
  str.split('').forEach((char) => {
    arr.unshift(char);
  });
  return arr.join('');
}

module.exports = reverseString;
