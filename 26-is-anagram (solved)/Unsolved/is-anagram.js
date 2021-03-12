// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    return strA.split("").sort((a,b)=> a.localeCompare(b)).join("") === strB.split("").sort((a,b)=> a.localeCompare(b)).join("");
};
