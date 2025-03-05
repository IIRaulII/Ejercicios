function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }
  
  // Ejemplos de uso
  console.log(rollDice(6)); // Simula un dado de 6 caras
  console.log(rollDice(20)); // Simula un dado de 20 caras
  console.log(rollDice(100)); // Simula un dado de 100 caras
  