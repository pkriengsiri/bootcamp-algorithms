// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function (str) {
    // split the string
    const strArr = str.split("");
    // map the array
    const strArrMap = new Map();
    // Add numbers to the map, and increment the values for each number
    strArr.forEach(number => {
        if (strArrMap.has(number)) {
            strArrMap.set(number, strArrMap.get(number) + 1);
        } else {
            strArrMap.set(number, 1);
        }
    })
    if (strArrMap.get("0") === strArrMap.get("1")) {
        return true;
    } else {
        return false
    }
}

