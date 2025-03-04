// 1.1 Insertar dinámicamente un div vacío
const nuevoDiv1 = document.createElement("div");
document.body.appendChild(nuevoDiv1);

// 1.2 Insertar dinámicamente un div con una p dentro
const nuevoDiv2 = document.createElement("div");
const nuevaP2 = document.createElement("p");
nuevaP2.textContent = "Este es un párrafo dentro de un div.";
nuevoDiv2.appendChild(nuevaP2);
document.body.appendChild(nuevoDiv2);

// 1.3 Insertar dinámicamente un div con 6 p dentro utilizando un loop
const nuevoDiv3 = document.createElement("div");
for (let i = 0; i < 6; i++) {
    const nuevaP3 = document.createElement("p");
    nuevaP3.textContent = `Párrafo ${i + 1}`;
    nuevoDiv3.appendChild(nuevaP3);
}
document.body.appendChild(nuevoDiv3);

// 1.4 Insertar una p con el texto 'Soy dinámico!'
const nuevaP4 = document.createElement("p");
nuevaP4.textContent = "Soy dinámico!";
document.body.appendChild(nuevaP4);

// 1.5 Insertar en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 1.6 Crear una lista ul > li con los textos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");

apps.forEach(app => {
    const li = document.createElement("li");
    li.textContent = app;
    ul.appendChild(li);
});

document.body.appendChild(ul);

// 1.7 Eliminar todos los nodos con la clase .fn-remove-me
document.querySelectorAll(".fn-remove-me").forEach(element => element.remove());

// 1.8 Insertar una p con el texto 'Voy en medio!' entre los dos div existentes
const nuevaP8 = document.createElement("p");
nuevaP8.textContent = "Voy en medio!";
const divs = document.querySelectorAll("div");
divs[0].insertAdjacentElement("afterend", nuevaP8);

// 1.9 Insertar una p con el texto 'Voy dentro!' dentro de todos los div con la clase .fn-insert-here
document.querySelectorAll(".fn-insert-here").forEach(div => {
    const nuevaP9 = document.createElement("p");
    nuevaP9.textContent = "Voy dentro!";
    div.appendChild(nuevaP9);
});