const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// 5.1 Filtrar edades mayores a 18
const adultAges = ages.filter(age => age > 18);
console.log(adultAges);

// 5.2 Filtrar números pares
const evenAges = ages.filter(age => age % 2 === 0);
console.log(evenAges);

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// 5.3 Filtrar streamers que juegan League of Legends
const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(lolStreamers);

// 5.4 Filtrar streamers cuyo nombre contiene 'u'
const streamersWithU = streamers.filter(streamer => streamer.name.includes('u'));
console.log(streamersWithU);

// 5.5 Filtrar streamers que juegan juegos que contienen 'Legends' y modificar si tienen más de 35 años
const legendsStreamers = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends')).map(streamer => ({
	...streamer,
	gameMorePlayed: streamer.age > 35 ? streamer.gameMorePlayed.toUpperCase() : streamer.gameMorePlayed
}));
console.log(legendsStreamers);
