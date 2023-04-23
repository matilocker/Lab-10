//import {Pelicula} from "./utils.js"; 
//No me funcionó
const carruseles = document.querySelectorAll(".carousel");
const divs = Array.from(carruseles);

class Pelicula {
  titulo = "";
  banner = "";
  tarjeta = "";
  overview = "";

  constructor(card, banner, id, banner_title, synopsis) {
    this.tarjeta = card;
    this.banner = banner;
    this.id = id;
    this.banner_title = banner_title;
    this.synopsis = synopsis;
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
    card.id = this.id;
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

  for (let movie of data.suggested) {
    let peli = new Pelicula(movie.card, movie.banner, movie.id); //instanciar


    const pelis = peli.render();

    carruseles.forEach((carrusel) => {
      carrusel.appendChild(pelis.cloneNode(true));
    });
  }

  for (let peli of data.suggested) {
    let tarjeta = document.getElementById(peli.id, peli.banner, peli.synopsis, peli.banner_title)
    tarjeta.addEventListener('click', () => {
      const mainMovie = document.querySelector('.main-movie');
      mainMovie.style.backgroundColor = 'linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0))';
      mainMovie.innerHTML = ''; //Esto me permite que al volver a dar clock en otra de las películas se resetee el div y no se acumule la info.
      const descripcion = document.createElement("p");
      const titulo_banner = document.createElement("h3");
      const img_title = document.createElement("img")
      descripcion.classList.add("descripcion");
      titulo_banner.classList.add("titulo");
      img_title.src = peli.banner_title;
      descripcion.innerHTML = `
        ${peli.synopsis}
        `;
      mainMovie.appendChild(descripcion);
      mainMovie.appendChild(titulo_banner);
      titulo_banner.appendChild(img_title);
      mainMovie.style.background = `linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0.855)), url(${peli.banner})`; //usamos comillas invertidas para permitir concatenar diferentes tipos de código.
      mainMovie.style.backgroundSize = 'cover';
      return
    })
  }
  const mainMovie = document.querySelector('.main-movie');
  mainMovie.style.backgroundColor = 'linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0))';
};


mifuncion();
