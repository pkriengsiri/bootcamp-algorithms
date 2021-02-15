// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    // create an array with each word in the string as elements
    const strArr = str.split(" ");

    // iterate over the array and capitalize convert each word to titlecase
    return strArr.map(word => {
        //convert the word to lowercase
        const lowercaseWord = word.toLowerCase();
        //convert the first letter to uppercase and concatenate with the rest of the word
        return lowercaseWord.charAt(0).toUpperCase()+lowercaseWord.substring(1,lowercaseWord.length);
    }).join(" ");
};
