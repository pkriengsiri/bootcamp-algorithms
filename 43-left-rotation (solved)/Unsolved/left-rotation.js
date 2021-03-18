// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

var leftRotation = function(arr, positions) {
    // loop over the array for the number of positions to be shifted
    for(i = 0; i < positions; i++) {
        // remove the first element and add it to the end
        arr.push(arr.shift());
    }
};
