const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

// 4.1 Obtener array con los nombres
const userNames = users.map(user => user.name);
console.log(userNames);

// 4.2 Cambiar nombre a 'Anacleto' si empieza por 'A'
const updatedNames = users.map(user => user.name.startsWith('A') ? 'Anacleto' : user.name);
console.log(updatedNames);

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

// 4.3 Añadir '(Visitado)' si isVisited es true
const visitedCities = cities.map(city => city.isVisited ? `${city.name} (Visitado)` : city.name);
console.log(visitedCities);
