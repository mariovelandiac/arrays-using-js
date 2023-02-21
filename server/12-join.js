const elements = ['Fire', 'Air', 'Water'];

let rta = '';
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index != elements.length-1) {
        rta = rta+element+separator
    } else {
        rta =rta+element
    }
}

console.log(`La respuesta con for es ${rta}`);
const rtaJoin = elements.join(separator)
console.log(`La respuesta con join es ${rtaJoin}`);

const string = 'Curso de Mario Velandia';
const array = string.split(' ');
console.log(array);
const finalTitle = array.join('-').toLowerCase();
console.log(finalTitle)
