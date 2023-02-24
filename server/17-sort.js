const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort()); // mayus antes que min
const numbers = [1, 30, 4, 21, 100000];
console.log(numbers.sort((a,b) => a - b));
console.log(numbers)

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a,b) => a.total - b.total);
console.log(orders)

const date1 = new Date(2023,1,23,19,00);
const date2 = new Date(2023,1,23,18,30);
const date3 = new Date(2023,1,22,18,45);
dates = [date1,date2,date3];

console.log(dates.sort((a,b)=>b-a))