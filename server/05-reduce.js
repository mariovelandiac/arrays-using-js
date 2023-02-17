const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let sum = 0;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum += element
}
console.group('for');
console.log(sum);
console.groupEnd('for');
console.group('reduce');

const rta = numbers.reduce((acumulator, element) => {
    if (element % 2 === 0) {
        acumulator = acumulator + element
    } else {
        acumulator = acumulator - element
    }
    return acumulator
}, 0);
console.log(rta);
console.groupEnd('reduce');
