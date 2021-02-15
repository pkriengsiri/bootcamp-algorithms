// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  // counter for number of vowels
  let numVowels = 0;

  // iterate over the string length to check each character
  for (let i = 0; i < str.length; i++) {
    // convert the letter to lowercase, and increment numVowels whenever a letter in the string is a vowel
    if (
      str.charAt(i).toLowerCase() === "a" ||
      str.charAt(i).toLowerCase() === "e" ||
      str.charAt(i).toLowerCase() === "i" ||
      str.charAt(i).toLowerCase() === "o" ||
      str.charAt(i).toLowerCase() === "u"
    ) {
      numVowels++;
    }
  }
  return numVowels;
};
