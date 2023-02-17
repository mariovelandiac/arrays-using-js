const orders = [
    {
        customerName: 'Mario',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Ricardo',
        total: 120,
        delivered: true
    },
    {
        customerName: 'Alejandra',
        total: 80,
        delivered: false
    },
    {
        customerName: 'Mia',
        total: 200,
        delivered: false
    },
    {
        customerName: 'Maria',
        total: 250,
        delivered: true
    }
];

const rta = orders.map(item => item.total)
console.log('rta', rta);

const rta2 = orders.map(item => {
    let copy = {...item};
    copy.tax = copy.total*0.19
    return copy
    });
console.log('orders', orders);

console.log('rta2', rta2);

module.exports = orders