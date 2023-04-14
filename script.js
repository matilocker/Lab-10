import {Pelicula} from "./utils.js";


const mifuncion = async () => {
    const response = await fetch("https://raw.githubusercontent.com/matilocker/Lab-10/main/movies.json");
    const data = await response.json();

    for (let movie of data){

    }
}

mifuncion()