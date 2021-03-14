// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // sort the array
  arr.sort((a,b)=> a-b);
  let songCount = 0;
  let totalMinutes = 0
  // iterate over the array
  for(let i =0; i <= arr.length; i++) {
    // add the current song's length to the total minutes array
    totalMinutes += arr[i];
    // check to see if total minutes is more than 60, or if we are at the end of the array
    if(totalMinutes >60 || i === arr.length) {
      // return the count
      return songCount;
    } else {
      // add one to the count
      songCount++;
    }
  }
};
