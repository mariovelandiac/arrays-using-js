const words = ['spray', 'limit', 'elite', 'exhuberant'];
const orders = require('./03-map_reloaded')
const newArray = [];

for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.length >= 6) {
        newArray.push(item)
    }
};
console.group('for');
console.log(newArray); 
console.log(words);
console.groupEnd('for')
  

// ahora con filter

const rta = words.filter(item => item.length >= 6);

console.group('filter');
console.log(rta);
console.log(words);
console.groupEnd('filter');

// filtro para ordenes

const delivered = orders.filter(item => item.delivered && item.total >= 100)

console.log(delivered);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
}

console.log(search('a'))

