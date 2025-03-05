const suma = (a = 10, b = 5) => {
    console.log(a + b);
};

// 1.1 Ejecuta la función sin pasar ningún parámetro
suma(); // 10 + 5 = 15

// 1.2 Ejecuta la función pasando un solo parámetro
suma(20); // 20 + 5 = 25

// 1.3 Ejecuta la función pasando dos parámetros
suma(7, 3); // 7 + 3 = 10
