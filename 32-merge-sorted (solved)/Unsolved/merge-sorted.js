// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    // add both arrays to a map
    const numberMap = new Map();
    arr1.concat(arr2).forEach(number => {
        if (numberMap.has(number)) {

        } else {
            numberMap.set(number, true);
        }
    });
    // return a sorted array of the keys
    console.log(numberMap.keys());
    return [...numberMap.keys()].sort((a,b)=> a-b);
};

mergeSorted([1,2,3,4,5,6],[3,4,5,6,7]);