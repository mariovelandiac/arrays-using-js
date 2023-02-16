const letter = ['a', 'b', 'c', 'd', 'e'];

// for (let index = 0; index < letter.length; index++) {
//     let element = letter[index];
//     console.log('for' + ' ' + element);
// }

letter.forEach(item => {
    item = item + '++'
    return item
});

console.log(letter)