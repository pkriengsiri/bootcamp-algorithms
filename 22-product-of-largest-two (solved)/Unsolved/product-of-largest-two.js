// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    arr.sort((a,b)=>(b-a));
    return arr[0]*arr[1];
};


// # Product of Largest Two

// In this activity you will be writing code to create a function that finds the largest two numbers in an array and returns the product of both numbers.

// ## Instructions

// * Open [Unsolved/product-of-largest-two.js](Unsolved/product-of-largest-two.js) in your code editor&mdash;this is the only file you will modify in this activity.

//   * In this file you will be writing code in the body of the `productOfLargestTwo` function to achieve the following:

//     * Find the largest and the second largest numbers in the given array.

//     * Return the product of the largest and the second largest number.

//     * See the following array for an example:

//       ```js
//       var arr = [10, 20, 9, 6, 3]; // largest is 20, secondLargest is 10
//       ```

//     * Given the preceding array, the following product should be returned:

//       ```js
//       200
//       ```