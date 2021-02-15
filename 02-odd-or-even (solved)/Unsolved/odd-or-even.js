// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
    if(num % 2 === 0) {
        return "even";
    } else if(num % 2 === 1) {
        return "odd";
    } else {
        return "the number is not an integer";
    }
};
