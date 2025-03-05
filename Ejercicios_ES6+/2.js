const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

// 2.1 Destructuring del objeto game
const { title, gender, year } = game;
console.log(title, gender, year);

const fruits = ['Banana', 'Strawberry', 'Orange'];

// 2.2 Destructuring del array fruits
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'};
};

// 2.3 Destructuring del objeto retornado por la función
const { name, race } = animalFunction();
console.log(name, race);

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020]};

// 2.4 Destructuring del objeto car
const { name: carName, itv } = car;
const [itv1, itv2, itv3] = itv;
console.log(carName, itv1, itv2, itv3);
