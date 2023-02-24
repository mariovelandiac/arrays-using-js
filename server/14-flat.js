const matriz = [
    [1,2,3],
    [4,5,[1,2,6, [1,2,3,4]]],
    [7,8,[9,2]]
];
const newArray = [];
let element;
let array;
for (let i = 0; i < matriz.length; i++) {
    array = matriz[i];
    for (let j = 0; j < matriz.length; j++) {
        element = array[j];
        newArray.push(element)
    }
}
const newArrayFlat = matriz.flat(3);

console.log('for', newArray);
console.log('flat', newArrayFlat);


const answer = [];
function flatArray(array) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (!Array.isArray(element)) {
            answer.push(element);
        } else {
            flatArray(element);
        }
    }
    return answer;
}

console.log('custom flat', flatArray(matriz));