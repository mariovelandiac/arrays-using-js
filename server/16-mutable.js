const products = [
    { title: 'Pizza', price: 121, id: 'ð' },
    { title: 'Burger', price: 121, id: 'ð' },
    { title: 'Hot cakes', price: 121, id: 'ð¥' },
];

const myProducts = [];

// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

// aÃ±adir elemento a myProductos

wishElement = 'ð'
const index = products.findIndex(item => item.id === wishElement);

if (index !== -1) {
    myProducts.push(products[index]);
    newProducts = [...products]
    newProducts.splice(index, 1);
}

// console.log("products", products);
// console.log("newProducts", newProducts);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

///

const productsV2 = [
    { title: 'Pizza', price: 121, id: 'ð' },
    { title: 'Burger', price: 121, id: 'ð' },
    { title: 'Hot cakes', price: 121, id: 'ð¥' },
];

const update = {
    id: 'ð¥',
    changes: {
        price: 200,
        description: 'sabroso'
    }
}

// const indexV2 = productsV2.findIndex(item => item.id === update.id);
// productsV2[indexV2] = {
//     ...productsV2[indexV2],
//     ...update.changes
// }
// console.log(productsV2)

// sin alterar el array original

const updatedArray = productsV2.map(item => {
    if (item.id === update.id) {
        return {
            ...update.changes,
            ...item
        }
    }
    return {...item}
})
console.log('ProductV2', productsV2);
console.log('Sin modificar Array', updatedArray);