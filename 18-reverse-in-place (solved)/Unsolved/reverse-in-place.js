// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function (arr) {    
    arr.forEach((element, index) => {
        arr.splice(index,1);
        arr.unshift(element);
    });
    return arr;
};

// # Reverse In Place

// In this activity you will be writing code to create a function that takes an array and reverses the array in place without using the built-in `reverse` method.

// ## Instructions

// - Open [Unsolved/reverse-in-place.js](Unsolved/reverse-in-place.js) in your code editor -- **this is the only file you will modify in this activity.**

//   - In this file you will be writing code in the body of the `reverseInPlace` function to achieve the following:

//     - Reverse the array in place without using the built-in `reverse` method.

//     - To reverse an array "in place" means to reverse the original array without creating a brand new array. This can be achieved by swapping elements within the original array.

//     - Return the array after it has been reversed.

//     - e.g. given the following array:

//     ```js
//     var arr = [2, 4, 6, 8];
//     ```

//     - The original `arr` array should be returned, but with it's elements in reverse order.

//     ```js
//     [8, 6, 4, 2]; // this still refers to the original arr array
// ```
