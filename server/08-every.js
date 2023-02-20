const numbers = [1,30,49,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > 40) {
        rta = false
    }
}

const rtaEvery = numbers.every(item => item < 40);

console.log('rta con every', rtaEvery);
console.log('rta con for', rta);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 16,
    },
  ];


const challenge = team.every(item => item.age <= 15);
console.log(`Cumplen con los requisitos el equipo: ${challenge}`)