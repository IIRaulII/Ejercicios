// Array de álbumes
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];
  
  // Crear un elemento <ul>
  const ul = document.createElement("ul");
  
  // Recorrer el array y crear un <li> por cada álbum
  albums.forEach(album => {
    const li = document.createElement("li");
    li.textContent = album;
    ul.appendChild(li);
  });
  
  // Agregar la lista al body del documento
  document.body.appendChild(ul);
  