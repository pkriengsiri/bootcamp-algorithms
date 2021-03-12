// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    //split the string to an array of words
    const strArray = str.split(" ");
    // store the modified words in a new array
    let result = [];
    //take the first word, convert to lowercase, and add to the result array
    result.push(strArray[0].toLowerCase());
    //iterate of the rest of the words, convert to capital case, then push the to result array
    for (let i = 1; i < strArray.length; i++) {
        // take the first letter of the word and capitalize it, the concatenate it with the remainder of the word to lowercase
        const word = strArray[i].substring(0,1).toUpperCase()+strArray[i].substring(1,strArray[i].length).toLowerCase();
        result.push(word);
    }
    // return the result joined as a string

    return result.join("");
};




// # Camel Case

// In this activity you will be writing code to create a function that takes a string and returns the string in camel case.

// ## Instructions

// * Open [Unsolved/camel-case.js](Unsolved/camel-case.js) in your code editor&mdash;this is the only file you will modify in this activity.

//   * In this file you will be writing code in the body of the `camelCase` function to achieve the following:

//     * Return a camel case version of the given string.

//     * A string is in camel case when there are no spaces between words, the first letters of each word except the first word is capitalized, and all other letters are in lowercase.

//     * See the following string for an example:

//       ```js
//       var str = "let the force flow through you";
//       ```

//     * Given the preceding example, the following string should be returned:

//       ```js
//       "letTheForceFlowThroughYou";
//       ```
