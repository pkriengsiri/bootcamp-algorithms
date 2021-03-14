// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

var multiplyInto20 = function(arr) {
    if(arr.includes(-20)) {
        if(arr.includes(-1)) {
            return true;
        }
    }
    if(arr.includes(-10)) {
        if(arr.includes(-2)) {
            return true;
        }
    }
    if(arr.includes(-5)) {
        if(arr.includes(-4)) {
            return true;
        }
    }
    if(arr.includes(20)) {
        if(arr.includes(1)) {
            return true;
        }
    }
    if(arr.includes(10)) {
        if(arr.includes(2)) {
            return true;
        }
    }
    if(arr.includes(5)) {
        if(arr.includes(4)) {
            return true;
        }
    }
    
    return false;
    
};
