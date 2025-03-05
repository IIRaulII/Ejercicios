const numbers = [32, 21, 63, 95, 100, 67, 43];

// 6.1 Encontrar el número 100
const foundNumber = numbers.find(num => num === 100);
console.log(foundNumber);

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

// 6.2 Encontrar la película del año 2010
const movie2010 = movies.find(movie => movie.date === 2010);
console.log(movie2010);

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];

const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

// 6.3 Encontrar el alien 'Cucushumushu' y la mutación 'Porompompero'
const foundAlien = aliens.find(alien => alien.name === 'Cucushumushu');
const foundMutation = mutations.find(mutation => mutation.name === 'Porompompero');

// Fusionar el alien con la mutación
const mergedAlien = { ...foundAlien, mutation: foundMutation };
console.log(mergedAlien);
