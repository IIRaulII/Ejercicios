// 1.1 Crear una lista <ul> con <li> de países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement("ul");

countries.forEach(country => {
    const li = document.createElement("li");
    li.textContent = country;
    ulCountries.appendChild(li);
});

document.body.appendChild(ulCountries);

// 1.2 Eliminar el elemento con la clase .fn-remove-me
const removeElement = document.querySelector(".fn-remove-me");
if (removeElement) removeElement.remove();

// 1.3 Crear una lista <ul> con <li> de coches dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement("ul");

cars.forEach(car => {
    const li = document.createElement("li");
    li.textContent = car;
    ulCars.appendChild(li);
});

divPrintHere.appendChild(ulCars);

// 1.4 Crear divs con un h4 (título) y una img (imagen)
const countriesWithImages = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.createElement("div");
document.body.appendChild(container);

countriesWithImages.forEach(item => {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");

    h4.textContent = item.title;
    img.src = item.imgUrl;

    div.appendChild(h4);
    div.appendChild(img);
    container.appendChild(div);
});

// 1.5 Crear un botón que elimine el último div de la serie
const deleteLastBtn = document.createElement("button");
deleteLastBtn.textContent = "Eliminar último div";
document.body.appendChild(deleteLastBtn);

deleteLastBtn.addEventListener("click", () => {
    const allDivs = container.querySelectorAll("div");
    if (allDivs.length > 0) {
        allDivs[allDivs.length - 1].remove();
    }
});

// 1.6 Crear un botón en cada div que elimine ese mismo div
container.querySelectorAll("div").forEach(div => {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar este div";
    div.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        div.remove();
    });
});