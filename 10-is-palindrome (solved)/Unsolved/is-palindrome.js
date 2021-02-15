// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    // Split the string to an array, reverse it, then join it back together
    const strReversed = str.split("").reverse().join("");

    // compare to the string passed in
    return strReversed === str;
};
