import { traerPeliculas, urlBase } from './api.js';


const contenedorPeliculas=document.getElementById("container");
const ventanaModal=document.getElementById("ventanaModal");
const botonCerrarModal=document.getElementById("btncerrarModal");


//const fetcher = new InMemoryFetcher();
//const movieService = new MovieService(fetcher);

async function mostrarModal(identificador){
      const pelixIdentificador= await traerPeliculas(urlBase+"id/"+identificador);
      console.log(pelixIdentificador);
      const titulo=document.getElementById("titulo");
      const sinopsis=document.getElementById("sinopsis");
      const duracion=document.getElementById("duracion");
      const genero=document.getElementById("genero");    
      titulo.textContent=pelixIdentificador[0].title;
      sinopsis.textContent=pelixIdentificador[0].synopsis;
      duracion.innerText="Duracion: "+pelixIdentificador[0].duration+" min.";   
      genero.innerText="Genero: "+pelixIdentificador[0].genre+".";
      console.log("se crea una ventan Modal");
      ventanaModal.showModal();

}
function cerrarModal(){
    botonCerrarModal.addEventListener("click", ()=>{
        ventanaModal.close();
        console.log("se presiono cerrar...")
                                                   });
}



document.addEventListener('DOMContentLoaded', async () => {
    try {
        const movies = await traerPeliculas(urlBase); //movieService.getAllMovies();
        console.log(movies);
        const container = document.getElementById('movies-list');
        movies.forEach(movie => {
            const card = document.createElement('article');
            card.classList.add("card", "col-12", "col-md-3");
            card.style.minWidth = '18rem';
            card.style.maxWidth = '80%';
            card.innerHTML = `
  <img src="${movie.poster}" class="card-img-top mt-2 rounded rounded-2" alt="${movie.title}">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.year}</p>
    <p class="card-text">${movie.director}</p>
    <a href="#" class="btn btn-info" data-identificador="${movie.id}">More Info</a>
  </div>`;
            container.appendChild(card);
        });
        contenedorPeliculas.addEventListener("click", (evento)=>{
                                             console.log(evento.target.dataset.identificador);
                                             if (evento.target.dataset.identificador!=="" && evento.target.dataset.identificador!==undefined){
                                                                                       evento.preventDefault();
                                                                                       console.log(evento.target);  
                                                                                       mostrarModal(evento.target.dataset.identificador);
                                                                                       cerrarModal();
                                                                                         }
                                                                                                                                            
                                            });  
    } catch (error) {
        console.error('Error al cargar películas:', error);
    }
});
