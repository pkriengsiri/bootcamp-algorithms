// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverse = function (str) {
    // split the string
    const words = str.split("");
    const resultArray = [];
    for (let i = words.length; i >= 0; i--) {
        resultArray.push(words[i]);
    }
    return resultArray.join(""); 
};
