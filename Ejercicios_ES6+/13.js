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
  
  function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }
  
  // Ejemplos de uso
  console.log(removeItem([...mainCharacters], "Luke")); // Elimina 'Luke'
  console.log(removeItem([...mainCharacters], "Rey")); // Elimina 'Rey'
  console.log(removeItem([...mainCharacters], "Yoda")); // No hace nada, 'Yoda' no está en el array
  