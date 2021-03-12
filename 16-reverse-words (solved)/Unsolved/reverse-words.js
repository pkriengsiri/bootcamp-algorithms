// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {
    // split the string
    const words = str.split(" ");
    return words.reverse().join(" ");
};

// - In this file you will be writing code in the body of the `reverseWords` function to achieve the following:

// - Return a new string that has all the words in the given string in reversed order. Reverse the order of the _words_, not the _letters_ in the string.

// - e.g. given the following string:

// ```js
// var str = "just keep swimming";
// ```

// - The following string should be returned:

// ```js
// "swimming keep just";