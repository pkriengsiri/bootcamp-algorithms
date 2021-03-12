// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(target===arr[i]) {
            return i;
        }
    }
    return -1;
};


// # Linear Search

// In this activity you will be writing code to create a function that takes an array of numbers and a target number and returns the index of the target number in the given array.

// ## Instructions

// * Open [Unsolved/linear-search.js](Unsolved/linear-search.js) in your code editor -- **this is the only file you will modify in this activity.**

//   * In this file you will be writing code in the body of the `linearSearch` function to achieve the following:

//     * Return the index of the given `target` number in the given `arr` array.

//     * If the `target` number is not present in the given `arr` array, return -1.

//     * For example, given the following array and target number:

//     ```js
//     var arr = [82, 22, -4, 21, 1, 8];
//     var target = 8;
//     ```

//     * The following number should be returned:

//     ```js
//     5
//     ```

//     * If the array contains multiple instances of the target number, return the index for the first instance.

//     * **You may not use the built-in `indexOf`, `lastIndexOf`, or `includes` methods for this problem.**
