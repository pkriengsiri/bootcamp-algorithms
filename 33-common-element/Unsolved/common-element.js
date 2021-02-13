// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method


var commonElement = function (arrA, arrB) {
  // const aHashMap = {};
  // let result;
  // arrA.forEach((number) => (aHashMap[number] = true));
  // // return arrB.find(number => aHashMap[number]);
  // for(number of arrB) {
  //   if(aHashMap[number]) {
  //     return number;
  //   }
  // }
  const aMap = new Map();
  arrA.forEach(number => aMap.set(number, 1));
  return arrB.find(number => aMap.has(number));
};

console.log(commonElement([1,3,4],[5,7,3]));

