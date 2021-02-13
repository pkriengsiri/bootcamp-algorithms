// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {
    numbers = Math.floor(num/2);
    for(var i = 0; i <= numbers; i++) {
        console.log(i*2);
    }
};
