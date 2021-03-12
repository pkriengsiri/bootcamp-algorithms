// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    // variable to store the result
    let result = ""
    // split the string to an array of words
    // for each word, concatenate the first letter to result
    const stringArray = str.split(" ");
    stringArray.forEach(word => {
        result += (word.charAt(0));
    });
    // return the result converted to uppercase
    return result.toUpperCase();
};

acronymBuilder("I want to go home");


// # Acronym Builder

// In this activity you will be writing code to create a function that takes a string and returns the [acronym](https://en.wikipedia.org/wiki/Acronym) for the given string.

// ## Instructions

// - Open [Unsolved/acronym-builder.js](Unsolved/acronym-builder.js) in your code editor -- **this is the only file you will modify in this activity.**

//   - In this file you will be writing code in the body of the `acronymBuilder` function to achieve the following:

//     - Return a new string that is an acronym of the given string.

//     - For example, given the following string:

//     ```js
//     var str = "For your information";
//     ```

//     - return:

//     ```js
//     "FYI";
//     ```

// - You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

//   - Functions that _pass_ the tests will be denoted with a **green check mark**.

//   - Functions that _fail_ the tests will be denoted with a **red x and an error message**.

