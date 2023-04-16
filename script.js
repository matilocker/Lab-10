//import {Pelicula} from "./utils.js"; 
//No me funcionó
const carrusel = document.querySelector(".carousel")

class Pelicula {
    titulo = ""
    banner = ""
    tarjeta = ""
    overview = ""

    constructor (card){
        this.tarjeta = card;
    }

    render() {
        const card = document.createElement('div')
        const a = document.createElement('a')
        const img = document.createElement('img')
        card.classList.add ("pelicula")
        img.src = this.tarjeta;
        a.href = "#";
        card.appendChild(a);
        a.appendChild(img);
        
        card.innerHTML = `
        <div class="rating">
            <button><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                class="fa-regular fa-star"></i></button>
            <button><i class="fa-regular fa-bookmark"></i> Añadir</button>
        <div>
        `;

        return card;
    }

}

const mifuncion = async () => {
    const response = await fetch("https://raw.githubusercontent.com/matilocker/Lab-10/main/movies.json");
    const data = await response.json();

    for (let movie of data){
        let peli = new Pelicula(movie.card); //instanciar
        const pelis = peli.render();
        carrusel.appendChild(pelis);
    }
}

mifuncion()