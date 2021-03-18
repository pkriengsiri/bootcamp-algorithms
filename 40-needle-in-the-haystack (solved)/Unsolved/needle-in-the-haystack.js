// Write code to create a function that accepts two strings
// If the second string is found inside of the first string, return its starting index in the first string
// Else return `-1`

var strStr = function(str1, str2) {
    // variable to hold the starting index of the substring or -1
    const result = -1;
    // iterate over string 1
    for(let i = 0; i < str1.length; i++) {
        // compare the substring (starting at i until the number of characters in str2) from string 1 to string 2
        if(str1.substring(i,i+str2.length)=== str2) {
            // return the index 
            return i;
        }
    }
    // return the result
    return result;
};
