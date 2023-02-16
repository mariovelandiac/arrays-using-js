const letter = ['a', 'b', 'c', 'd', 'e'];
const newArray = letter.map(item => item + '++')

// for (let index = 0; index < letter.length; index++) {
//     let element = letter[index];
//     newArray.push(element + '++')
// }

console.log('original', letter);
console.log('new', newArray);