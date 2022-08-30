// const user = {
//     4: 'Alex',
//     surname: 'Smith',
//     birthday:'20/04/1993',
//     showMyPublicData:function(){
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// console.log(Object.keys(user));
// console.log(typeof(Object.keys(user)[0]));

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map();

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// map.set(shops[0], 5000);
// map.set(shops[1], 1500);
// map.set(shops[2], 10000);

console.log(map.get(shops[0]));