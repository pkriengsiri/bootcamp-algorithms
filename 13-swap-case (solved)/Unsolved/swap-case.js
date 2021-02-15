// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function (str) {
  // Split the string to an array at each character
  const strArr = str.split("");

  // Return the array with character case swapped
  return strArr
    .map((character) => {
      // check to see if the character is lowercase
      if (character.toLowerCase() === character) {
        // return the uppercase character
        return character.toUpperCase();
        // check to see if the character is uppercase
      } else if (character.toUpperCase() === character) {
        // return the lowercase character
        return character.toLowerCase();
      } 
    })
    .join("");
};