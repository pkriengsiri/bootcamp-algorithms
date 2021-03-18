// Write a function that takes an unsorted array of positive and unique integers and returns the number missing from the array

var missingNumber = function(nums) {
    // sort the array
    nums.sort((a,b) => a-b);
    // variable to store the last value
    let lastValue = null;
    // return 0 if the array is empty
    if(nums.length===0) {
        return 0;
    }
    //iterate over the array
    for(let i = 0; i < nums.length; i++) {
        // check to see if the current value minus the last value is 2
        if(nums[i]-lastValue===2) {
            // return the current value -1
            return nums[i]-1;
        } else {
            lastValue = nums[i]
        }
    }
    return nums[nums.length-1] +1;
};
