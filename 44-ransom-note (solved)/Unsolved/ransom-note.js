// Write a function that takes two strings and determines returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var ransomNote = function(magazine, note) {
    // create a map to hold the words in the magazine
    const magazineMap = new Map();
    // split the magazine string to an array
    const magazineArr = magazine.split(" ");
    // iterate over the magazine array add add the words and their freqency to the map
    for(let i = 0; i < magazineArr.length; i++) {
        if(magazineMap.has(magazineArr[i])) {
            // increase the word count for the current word by one
            let currentCount = magazineMap.get(magazine[i]);
            magazineMap.set(magazineArr[i], currentCount+1);
        } else {
            magazineMap.set(magazineArr[i],1);
        }
    }
    // split the note string to an array
    const noteArr= note.split(" ");
    // iterate over the note array and check to see if the current word exists in the map
    for(let i = 0; i < noteArr.length; i++) {
        // check to see if the current word is not in the map 
        if(!magazineMap.has(noteArr[i])) {
            return false
        } else {
            // check to see if the word count is 1 
            if(magazineMap.get(noteArr[i])===1) {
                // delete the note from the map
                magazineMap.delete(noteArr[i]);
            } else {
                // decrease the word count by 1
                let currentCount = magazineMap.get(note[i]);
                magazineMap.set(noteArr[i], currentCount-1);

            }
        }
    }
    return true;
};