// function getLargestNumber(array) {
//   // let largestNumber;
//   // for (let i = 0; i < array.length - 1; i++) {
//   //   if (array[i] > array[i + 1]) {
//   //     largestNumber = array[i];
//   //   }
//   // }
//   // return largestNumber;

// }

const getLargestNumber = (array) => array.sort((a,b) => b - a)[0]

module.exports = getLargestNumber;
