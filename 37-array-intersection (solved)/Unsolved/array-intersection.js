// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function (arr1, arr2) {
  // create a map to hold the values from arr1
  const arr1Map = new Map();
  // iterate over arr1 and add values to the map
  arr1.forEach((element) => {
    arr1Map.set(element, true);
  });
  // create an array to hold the intersection
  const intersection = [];
  // iterate over arr2 and add the current value to the intersection if it exists in arr1Map
  arr2.forEach((element) => {
    if (arr1Map.has(element)) {
      // push the current element to the intersection array
      intersection.push(element);
    }
  });
  return intersection;
};