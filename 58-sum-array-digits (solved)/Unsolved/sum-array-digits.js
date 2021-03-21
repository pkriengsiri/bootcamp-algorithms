// Write a function that takes in two arrays of non-negative integers
// Each element in the arrays contains a single digit
// Together each array represents a whole number
// Create and return a new array that is the sum of the numbers of the two provided arrays
// Solve this problem without type coercion, ie don't join the array into a string

var sumArrayDigits = function (arr1, arr2) {
    const arrToValue = (arr) => {
        let arrValue = 0;
        for (let i = 0; i < arr.length; i++) {
            arrValue += arr[i] * 10 ** (arr.length - 1 - i);
        }
        return arrValue
    }
    let sum = arrToValue(arr1) + arrToValue(arr2);
    let sumToArray = [];
    while (sum > 0) { 
        sumToArray.unshift(sum % 10); 
        sum = sum / 10 | 0; 
    }
    return sumToArray;
};
