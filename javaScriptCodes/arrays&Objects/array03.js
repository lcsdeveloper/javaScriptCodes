let topSongs = [
    'First time ever i saw your face',
    'god only knows',
    'a day in the life',
    'life on mars'
]; 

console.log(topSongs);

//putting a value at the end of the array
topSongs.push('Projota muleque de vila'); 
console.log(topSongs);

//removing the last indice of and array and returning it
const showTheLast = topSongs.pop();
console.log(showTheLast);
console.log(topSongs);