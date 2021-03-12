// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    const charMap = {};
    
    str.split("").forEach(element => {
        if(charMap[element]) {
            charMap[element]++;
        } else {
            charMap[element] = 1;
        }
    });
    return charMap;
};

characterCount("i went to the movies");