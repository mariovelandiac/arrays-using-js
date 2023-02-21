const elements = [1,2,3,4];
const otherElements = [5,6,7,8];
const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}


console.log('for', newArray);

// const elements2 = [1,2,3,4];
const newConcatArray = elements.concat(otherElements)
console.log('concat', newConcatArray);
console.log(`Los arrays de ambos métodos son iguales? ${newArray == newConcatArray}`)