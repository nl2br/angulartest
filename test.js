let myArray = [
    {
        type: 'machine',
        value: 457
    },{
        type: 'machine',
        value: 78
    },{
        type: 'machine2',
        value: 22
    },
];

let myMap = new Map();
myMap.set(0, { type: 'machine', value: 457 });
myMap.set(1, { type: 'machine', value: 78 });
myMap.set(2, { type: 'machine2', value: 22 });
// myMap.set('machine',457);
// myMap.set('machine2',78);
// myMap.set('machine3',22);

const calcul = (data) => {
    let cumul = 0;
    data.forEach(item => {
            cumul = cumul + item.value
    });
    console.log(`cumul : ${cumul}`)
}

console.log('--------avec array');
calcul(myArray);
console.log('--------avec MAP()');
calcul(myMap);

let { Hunter } = require('./src/app/models.ts')
let hunter = new Hunter()
hunter.fight()