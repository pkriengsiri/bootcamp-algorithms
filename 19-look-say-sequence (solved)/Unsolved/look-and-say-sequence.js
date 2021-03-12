// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
    // convert the number to a string
    const nString = n.toString();
    console.log(nString);
    // array to store the grouped numbers
    const nArray = [];
    // remove the first character in the string and store it in the array
    const nString1 = nString.slice(1, nString.length);
    nArray.push(nString.charAt(0));
    // iterate of the string
    for(let i = 0; i < nString1.length; i++) {
        // check to see if the character matches the first character of last element in the array
        if(nString1.charAt(i) === nArray[nArray.length-1].charAt(0)) {
            nArray[nArray.length-1] += nString1.charAt(i);
        } else {
            nArray.push(nString1.charAt(i));
        }
    }
    console.log(nArray);
    let result = ""
    nArray.forEach((element) => {
        result += element.length+element.charAt(0);
    })
    console.log(result);
    return parseInt(result);
};

lookAndSay(114333877);

// # Look And Say Sequence

// In this activity you will be writing code to create a function that takes a number and returns a new number that satisfies the [look-and-say-sequence](https://en.wikipedia.org/wiki/Look-and-say_sequence).

// ## Instructions

// - Open [Unsolved/look-and-say-sequence.js](Unsolved/look-and-say-sequence.js) in your code editor -- **this is the only file you will modify in this activity.**

//   - In this file you will be writing code in the body of the `lookAndSay` function to achieve the following:

//     - Return a new number that [look-and-say-sequence](https://en.wikipedia.org/wiki/Look-and-say_sequence) for the given number.

//     - The look and say sequence can be understood by reading a number out loud, digit by digit, but first saying the number of times each digit appears in a row.

//     - For example, given the following number:

//     ```js
//     var n = 5442;
//     ```

//     - There is **one** five, **two** fours, and **one** two. So the look-say-sequence of `n` should be `152412`.
