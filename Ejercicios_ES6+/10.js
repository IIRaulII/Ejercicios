const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Pedro",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Cristina",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  
  // Variables para la suma total del volumen y el conteo de sonidos
  let totalVolume = 0;
  let soundCount = 0;
  
  // Recorrer cada usuario con for...of
  for (const user of users) {
    // Recorrer cada sonido favorito con for...in
    for (const sound in user.favoritesSounds) {
      totalVolume += user.favoritesSounds[sound].volume;
      soundCount++;
    }
  }
  
  // Calcular la media del volumen
  const averageVolume = totalVolume / soundCount;
  console.log(averageVolume);
  