// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

// // Option A
// var longestWord = function(str) {
//     // variable to store longest word and it's length
//     const longestWord = {
//         word: "",
//         length: 0,
//     }

//     // split the string at each space to form an array of words
//     const strArr = str.split(" ");

//     // a loop over the array and update the longest word
//     strArr.forEach(word => {
//         if(word.length > longestWord.length) {
//             longestWord.word = word;
//             longestWord.length = word.length;
//         }
//     })

//     return longestWord.word;
// };

// Option B
var longestWord = function(str) {
    //split the string at each space to form an array of words
    //sort the array by word length (descending)
    //return the first element in the array
    return str.split(" ").sort((a,b) => b.length - a.length)[0];
};

