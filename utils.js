export class Pelicula {
    titulo = ""
    banner = ""
    tarjeta = ""
    overview = ""

    constructor (title_banner, banner, card, synopsis){
        this.titulo = title_banner;
        this.banner = banner;
        this.tarjeta = card;
        this.overview = synopsis;
    }

    render() {
        addEventListener ('click', funcion())
    }

}

/*<div class="pelicula">
<a href="#"><img
        src="https://www.themoviedb.org/t/p/original/oOSKE6NUqSoD9PnMzdCigJDu53R.jpg"
        alt="Fleabag"></a>
<div class="rating">
    <button><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
            class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
            class="fa-regular fa-star"></i></button>
    <button><i class="fa-regular fa-bookmark"></i> Añadir</button>
</div>*/