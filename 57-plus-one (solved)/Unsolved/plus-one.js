// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function (digits) {
    // check to see if the last number in the array is 9
    if (digits[digits.length - 1] === 9) {
        // track the current index of the array
        let currentIndex = digits.length - 1;
        // check each element of the array starting at the end, and if it's 9, change it to 0
        while (digits[currentIndex] === 9) {
            digits[currentIndex] = 0;
            currentIndex--;
        }
        console.log(currentIndex)
        if (currentIndex <= 0) {
            // add a 1 to the beginning of the array
            digits.unshift(1);
        } else {
            // add 1 first non-9 element in the array
            digits[currentIndex] += 1;
        }
        // check for an empty array
    } else if (digits.length===0) {
        digits.push(1);
    } else {
        // add one to the last number in the array
        digits[digits.length - 1] += 1;
    }

    return digits;
};

plusOne([9, 9]);
