const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  function findArrayIndex(array, text) {
    return array.indexOf(text);
  }
  
  // Ejemplos de uso
  console.log(findArrayIndex(mainCharacters, "Luke")); // 0
  console.log(findArrayIndex(mainCharacters, "Rey")); // 4
  console.log(findArrayIndex(mainCharacters, "Obi-Wan")); // 6
  console.log(findArrayIndex(mainCharacters, "Yoda")); // -1 (no encontrado)
  