const array = [1,2,3,4,5,6,7,8,345,435,6,452,234,7,756,1,2463456];
let rtaFor = undefined;
let condition = 71;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === condition) {
        rtaFor = element;
        break
    }
}

console.log(`con el ciclo for la rta es ${rtaFor}`);
const rtaFind = array.find(item => item === condition)
console.log(`con find la rta es ${rtaFind}`);


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const rtaObject = products.findIndex(item => item.id === '🍔');
console.log(`el producto que quieres es ${rtaObject}`)