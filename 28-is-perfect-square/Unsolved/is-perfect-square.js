// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function (num) {
    if (num ===0) { return true }
    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) { return true }
    }
    return false;
};
