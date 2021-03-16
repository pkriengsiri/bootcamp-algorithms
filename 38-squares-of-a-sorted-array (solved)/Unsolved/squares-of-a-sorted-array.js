// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
    // map the array with each element squared, then sort the mapped array
    return arr.map(number => number*number).sort((a,b) => a-b);
};
