// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false



const multiplyInto20 = (arr) => {
    // Map to store numbers in the array
    const arrMap = new Map();

    // iterate over the array
    for (let i = 0; i < arr.length; i++) {
        // Find the number needed to be divisible by 20
        let numberNeeded = 20 / arr[i];
        // Check if the map has this number as a key
        if (arrMap.has(numberNeeded)) {
            // return true if it does
            return true;
        } else {
            // Add the number to the map if it doesn't
            arrMap.set(arr[i], 1);
        }
    }
    // Return false if no matches found
    return false;

}