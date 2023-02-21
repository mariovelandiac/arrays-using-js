const pets = ['cat', 'dog', 'bat', 'bird'];

let rta = false;
const condition = 'dog';
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === condition) {
        rta = true;
        break;
    }
}

console.log(`La respuesta con el ciclo for es ${rta}`);
const rtaInclude = pets.includes(condition)
console.log(`La respuesta con el includes es ${rtaInclude}`);