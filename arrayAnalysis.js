function average(arr) {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}

function min(arr) {
  return arr.reduce((acc, val) => {
    return val < acc ? val : acc;
  }, arr[0]);
}

function max(arr) {
  return arr.reduce((acc, val) => {
    return acc < val ? val : acc;
  }, arr[0]);
}

function analyze(arr) {
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };
}

module.exports = analyze;
