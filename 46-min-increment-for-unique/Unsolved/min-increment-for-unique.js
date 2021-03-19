// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

var minIncrement = function(nums) {
    // array to hold unique values
    const uniqueArr = [];

    // array to hold duplicate values
    const duplicateArr = [];

    // variable to hold number of increments
    let increments = 0;

    // interate over the array of numbers and separate unique values from duplicate values
    nums.forEach(number => {
        if(uniqueArr.includes(number)) {
            duplicateArr.push(number);
        } else {
            uniqueArr.push(number);
        }
    });

    // iterate over the array of duplicate values and increment each value until it is unique
    duplicateArr.forEach(number => {
        let currentNumber = number;
        while(uniqueArr.includes(currentNumber)) {
            currentNumber++;
            increments++;
        };
        // push the new unique number to the array
        uniqueArr.push(currentNumber);
    });
    
    return increments;

};
