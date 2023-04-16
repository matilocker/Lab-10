//import {Pelicula} from "./utils.js"; 
//No me funcionó
const carruseles = document.querySelectorAll(".carousel");
const divs = Array.from(carruseles);

class Pelicula {
  titulo = "";
  banner = "";
  tarjeta = "";
  overview = "";

  constructor(card) {
    this.tarjeta = card;
  }

  render() {
    const card = document.createElement("div");
    const a = document.createElement("a");
    const img = document.createElement("img");
    const boton = document.createElement("button");
    const añadir = document.createElement("button");
    const rating = document.createElement("div");
    boton.innerHTML = `
      <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
      class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
      class="fa-regular fa-star"></i>
    `;
    añadir.innerHTML = `
      <i class="fa-regular fa-bookmark"></i> Añadir
    `;
    card.classList.add("pelicula");
    rating.classList.add("rating");
    img.src = this.tarjeta;
    a.href = "#";
    card.appendChild(a);
    a.appendChild(img);
    rating.appendChild(boton);
    rating.appendChild(añadir);
    card.appendChild(rating);

    return card;
  }
}

const mifuncion = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/matilocker/Lab-10/main/movies.json"
  );
  const data = await response.json();

  const carruseles = document.querySelectorAll(".carousel");

  for (let movie of data) {
    let peli = new Pelicula(movie.card); //instanciar
    const pelis = peli.render();

    carruseles.forEach((carrusel) => {
      carrusel.appendChild(pelis.cloneNode(true)); //ERA EL PELISNODE(TRUE)
    });
  }
};

mifuncion();