const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  
  function swap(array, index1, index2) {
    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
      [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    return array;
  }
  
  // Ejemplos de uso
  console.log(swap([...fantasticFour], 0, 2)); // Intercambia 'La antorcha humana' con 'La mujer invisible'
  console.log(swap([...fantasticFour], 1, 3)); // Intercambia 'Mr. Fantástico' con 'La cosa'
  console.log(swap([...fantasticFour], 0, 4)); // No hace nada, índice fuera de rango
  