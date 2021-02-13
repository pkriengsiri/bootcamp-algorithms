// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    let previousNumber;
    console.log(arr);
    const arrayOfNumbers = [];
    arr.forEach(index => arrayOfNumbers.push(parseFloat(index)));
    // arr.forEach(index => console.log(index));
    arrayOfNumbers.sort();
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        if(arrayOfNumbers[i] === arrayOfNumbers[i+1]) {
            return false;
        } 
    }
    return true;
};

// this solution is lnown as a has map
var isUnique = function(arr) {
    //create an empty object
    const object = {};
    //check to see if the object already has that key, if so return false.  Else add the key and set the value to 1.
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] in object) {
            //object[arr[i]]++;
            return false
        } else {
            object[arr[i]] = 1;
        }
    }
    return true;
    console.log(object);
};

isUnique([3, 4, 5, 7, 9]);


// # Is Unique
// In this activity you will be writing code to create a function that takes an array of numbers. Return `true` if no number appears more than once in the given array, else return `false`.
// ## Instructions
// * Open [Unsolved/is-unique.js](Unsolved/is-unique.js) in your code editor -- **this is the only file you will modify in this activity.**
//   * In this file you will be writing code in the body of the `isUnique` function to achieve the following:
//     * Return `true` if no number appears more than once in the given array, else return `false`.
//     * For example, given the following array:
//     ```js
//     var arr = [3, 4, 5, 7, 9]; // no number is repeated
//     ```
//     * The following should be returned:
//     ```js
//     true
//     ```
//     * Given the following array:
//     ```js
//     var arr = [20, -20, 18, 2, 3, 20]; // 20 appears twice
//     ```
//     * The following should be returned:
//     ```js
//     false
//     ```
// * You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.
//   * Functions that _pass_ the tests will be denoted with a **green check mark**.
//   * Functions that _fail_ the tests will be denoted with a **red x and an error message**.
// ### Hints
// * There are a variety of different ways to solve this problem, but attempt to use the same technique used in the earlier `character-count` problem.