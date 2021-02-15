// Write code to return the largest number in the given array

var maxNum = function (arr) {
  // sort the array in descending order, then return the first element
  return arr.sort((a, b) => b - a)[0];
};
