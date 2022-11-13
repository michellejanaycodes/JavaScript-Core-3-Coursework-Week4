// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let n = numbers.filter((num) => typeof num === "number");
  let sum = n.reduce((p, c) => p + c, 0);

  return sum / n.length;
}

module.exports = average;
