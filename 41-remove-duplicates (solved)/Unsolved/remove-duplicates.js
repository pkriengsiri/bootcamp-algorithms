// Write a function that takes a sorted array of numbers and removes duplicates from the array
// Do not create a new array, instead modify the original array
// There is no need to return anything from this function

var removeDuplicates = function(nums) {
    // variable to tract the current index
    let currentIndex=0;
    // variable to track the last value
    let lastValue = null;
    // loop over the array while the current index is less than the length
    while(currentIndex < nums.length) {
        // check if the number at the current index is same as the last number
        if(nums[currentIndex]=== lastValue) {
            // remove the current number
            nums.splice(currentIndex,1);
        } else {
            // set the last value to the current number
            lastValue= nums[currentIndex];
            // move onto the next number
            currentIndex++
        }
    }
};
