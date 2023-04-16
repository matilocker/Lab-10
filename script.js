//import {Pelicula} from "./utils.js"; 
//No me funcionó
const carruseles = document.querySelectorAll(".carousel");
const divs = Array.from(carruseles);

class Pelicula {
    titulo = "";
    banner = "";
    tarjeta = "";
    overview = "";
  
    constructor(card, banner) {
      this.tarjeta = card;
      this.banner = banner;
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
  
      img.addEventListener('load', () => {
        img.addEventListener('click', () => {
          const mainMovie = document.querySelector('.main-movie');
          mainMovie.style.backgroundImage = `url(${this.banner})`;
        });
      });
  
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
      let peli = new Pelicula(movie.card, movie.banner); //instanciar
      const pelis = peli.render();
  
      carruseles.forEach((carrusel) => {
        carrusel.appendChild(pelis.cloneNode(true));
      });
    }
  
    const mainMovie = document.querySelector('.main-movie');
    mainMovie.style.backgroundImage = 'linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0.455))';
  };
  
  mifuncion();
