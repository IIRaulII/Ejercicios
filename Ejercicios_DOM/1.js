// 1.1 Seleccionar y mostrar el botón con la clase .showme
const boton = document.querySelector(".showme");
console.log(boton);

// 1.2 Seleccionar y mostrar el h1 con el id #pillado
const titulo = document.querySelector("#pillado");
console.log(titulo);

// 1.3 Seleccionar y mostrar todos los <p>
const parrafos = document.querySelectorAll("p");
console.log(parrafos);

// 1.4 Seleccionar y mostrar todos los elementos con la clase .pokemon
const pokemones = document.querySelectorAll(".pokemon");
console.log(pokemones);

// 1.5 Seleccionar y mostrar todos los elementos con el atributo data-function="testMe"
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log(personajes);

// 1.6 Seleccionar y mostrar el 3er personaje con el atributo data-function="testMe"
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(tercerPersonaje);
