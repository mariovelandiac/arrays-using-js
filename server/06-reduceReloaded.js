const array = [1,2,3,1,2,5,4,15,2,6,3,2,5,1,2,5,2,36,5,2,1,5,15,23,16,5,12,1,2,5,1,2,3,6,5,4,1,2,5,2,3,6,5,2,1,2,5,4,1,2,5,2,3,6,5];

let rta = array.reduce((obj, element) => {
    if (!obj[element]) {
        obj[element] = 1;
    } else {
        obj[element] = obj[element] + 1
    }
    return obj
}, {})

console.log(rta);

const data = [
    {
        name: 'Mario',
        level: 'high'
    },
    {
        name: 'Ricardo',
        level: 'low'
    },
    {
        name: 'Mia',
        level: 'medium'
    },
    {
        name: 'Sofia',
        level: 'high'
    },
    {
        name: 'Joe',
        level: 'high'
    },
    {
        name: 'Marta',
        level: 'low'
    },
    {
        name: 'Mario',
        level: 'high'
    }
];


const rta2 = data
.map(item => item.level)
.reduce((obj, element) => {
    if (!obj[element]) {
        obj[element] = 1;
    } else {
        obj[element] = obj[element] + 1
    }
    return obj
}, {})

console.log(rta2);


const ranges = {
    '1-10': 0,
    '11-20': 0,
    '21-30': 0,
    'high': 0
}

const reduced = array.reduce((obj, element) => {
    if (element <= 10) {
        obj['1-10'] += 1;
    } else if (element <= 20) {
        obj['11-20'] += 1;
    } else if (element <= 30) {
        obj['21-30'] += 1;
    } else {
        obj['high'] += 1
    }
    return obj
}, ranges);

console.log(reduced)