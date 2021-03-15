// Write code to create a function that accepts a string and returns an object
// The object should contain keys for each character in the string
// Each key should point to an array containing the indexes the character is found in the string

var stringMap = function(str) {
    // create an object to hold the key value pairs
    const stringMap = {};
    // iterate over the string
    for(let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        // check to see if the string map has the current character
        if(stringMap[currentChar]) {
            // add the index to the array of indexes for the current key
            stringMap[currentChar].push(i);
        } else {
            // add the character to the map with the value set to the index stored in an array
            stringMap[currentChar] = [i];
        }
    }
    return stringMap;

};
