//import {Pelicula} from "./utils.js"; 
//No me funcionó
const carruseles = document.querySelectorAll(".carousel");
const divs = Array.from(carruseles);

class Pelicula {
    titulo = "";
    banner = "";
    tarjeta = "";
    overview = "";
  
    constructor(card, banner, id) {
      this.tarjeta = card;
      this.banner = banner;
      this.id = id;
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

    for (let movie of data) {
      let peli = new Pelicula(movie.card, movie.banner, movie.id); //instanciar


      const pelis = peli.render();
  
      carruseles.forEach((carrusel) => {
        carrusel.appendChild(pelis.cloneNode(true));
      });
    }

    for (let peli of data) {
      let tarjeta = document.getElementById(peli.id, peli.banner)
      tarjeta.addEventListener('click', () => {
        const mainMovie = document.querySelector('.main-movie');
          mainMovie.style.backgroundImage = `url(${peli.banner})`;
        return 
      })
    }

     /*card.addEventListener('load', () => {
        card.addEventListener('click', () => {
          const mainMovie = document.querySelector('.main-movie');
          mainMovie.style.backgroundImage = `url(${this.banner})`;
        });
        console.log(this.banner)
      });*/

    //const mainMovie = document.querySelector('.main-movie');
    //mainMovie.style.backgroundImage = 'linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0.455))';
  };
  

  mifuncion();
