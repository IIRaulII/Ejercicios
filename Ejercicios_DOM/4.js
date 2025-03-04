// 1.1 Añadir un botón con id "btnToClick" y agregar evento "click"
const button = document.createElement("button");
button.id = "btnToClick";
button.textContent = "Haz clic";
document.body.appendChild(button);

button.addEventListener("click", (event) => {
    console.log("Evento de clic:", event);
});

// 1.2 Agregar evento "focus" al input con clase "focus"
const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", () => {
    console.log("Valor del input en focus:", inputFocus.value);
});

// 1.3 Agregar evento "input" al input con clase "value"
const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", () => {
    console.log("Valor del input:", inputValue.value);
});
