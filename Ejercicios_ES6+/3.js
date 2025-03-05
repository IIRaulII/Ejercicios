const pointsList = [32, 54, 21, 64, 75, 43];

// 3.1 Copia del array usando spread operator
const pointsListCopy = [...pointsList];
console.log(pointsListCopy);

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

// 3.2 Copia del objeto usando spread operator
const toyCopy = {...toy};
console.log(toyCopy);

const pointsLis2 = [54, 87, 99, 65, 32];

// 3.3 Nuevo array fusionando los dos
const mergedPoints = [...pointsList, ...pointsLis2];
console.log(mergedPoints);

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

// 3.4 Nuevo objeto fusionando los dos objetos
const mergedToy = {...toy, ...toyUpdate};
console.log(mergedToy);

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

// 3.5 Copia del array eliminando la posición 2 sin modificar el original
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsCopy);
