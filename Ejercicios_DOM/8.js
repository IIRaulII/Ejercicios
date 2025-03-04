// Array de lugares
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

// Seleccionar el div con el atributo data-function="printHere"
const divPrintHere = document.querySelector('[data-function="printHere"]');

// Crear un elemento <ul>
const ul = document.createElement("ul");

// Recorrer el array y crear un <li> por cada lugar
places.forEach(place => {
    const li = document.createElement("li");
    li.textContent = place;
    ul.appendChild(li);
});

// Agregar la lista dentro del div
divPrintHere.appendChild(ul);
