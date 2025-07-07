import { traerPeliculas, urlBase } from './api.js';
import { habilitaDesabilita, mensajeNoEncontradas, mostrarModal, cerrarModal } from './control.js';

export const contenedorPeliculas=document.getElementById("movies-list"); //"container"
export const ventanaModal=document.getElementById("ventanaModal");
export const botonCerrarModal=document.getElementById("btncerrarModal");

export const ingresoTitulo=document.getElementById("inputTitulo");
export const ingresoDirector=document.getElementById("inputDirector");
export const ingresoYear=document.getElementById("inputYear");
export const selectGenero=document.getElementById("selectGenero");
export const checkTitulo=document.getElementById("checkTitulo");
export const checkDirector=document.getElementById("checkDirector");
export const checkYear=document.getElementById("checkYear");
export const botonBuscar=document.getElementById("botonBuscar");

//const fetcher = new InMemoryFetcher();
//const movieService = new MovieService(fetcher);

async function crearTarjetas(url){
          const movies = await traerPeliculas(url); //movieService.getAllMovies();
          //contenedorPeliculas = document.getElementById('movies-list'); //container
          contenedorPeliculas.textContent="";                        //container
          if (!movies.message){
                    for (let i = 0; i < movies.length; i=i+1) {
                        const card = document.createElement('article');
                        card.classList.add("card", "col-12", "col-md-3");
                        card.style.minWidth = '18rem';
                        card.style.maxWidth = '80%';
                        card.innerHTML = `
                       <img src="${movies[i].poster}" class="card-img-top mt-2 rounded rounded-2" alt="${movies[i].title}">
                       <div class="card-body">
                          <h5 class="card-title">${movies[i].title}</h5>
                          <p class="card-text">${movies[i].year}</p>
                          <p class="card-text">${movies[i].director}</p>
                          <a href="#" class="btn btn-info" data-identificador="${movies[i].id}" id="botonInfo">More Info</a>
                        </div>`;
                    contenedorPeliculas.appendChild(card);         //container 
                    }
                             }else {console.log("muestra mensaje no encontradas")
                                    mensajeNoEncontradas();
                                    /*
                                    const textoPeligro=document.createElement('h3');
                                    const imagenPeligroD=document.createElement('img')
                                    const imagenPeligroI=document.createElement('img')
                                    const cajaPeligro=document.createElement('div');
                                    cajaPeligro.setAttribute('id','cajaPeligro');
                                    textoPeligro.textContent="NO HAY PELICULAS PARA ESTE O ESTOS FILTROS";                                    
                                    imagenPeligroI.setAttribute('src','./images/Warning.gif');
                                    imagenPeligroI.setAttribute('id','peligro');
                                    imagenPeligroD.setAttribute('src','./images/Warning.gif');
                                    imagenPeligroD.setAttribute('id','peligro');                                    
                                    cajaPeligro.appendChild(imagenPeligroI);
                                    cajaPeligro.appendChild(textoPeligro); 
                                    cajaPeligro.appendChild(imagenPeligroD);                                                                                                           
                                    contenedor.appendChild(cajaPeligro); */  //contenedorPeliculas                                
                                   };
        //console.log(movies);
        //console.log(movies.message);
        //const container = document.getElementById('movies-list');
        //container.textContent="";
        /*
        for (let i = 0; i < movies.length; i=i+1) {
            const card = document.createElement('article');
            card.classList.add("card", "col-12", "col-md-3");
            card.style.minWidth = '18rem';
            card.style.maxWidth = '80%';
            card.innerHTML = `
  <img src="${movies[i].poster}" class="card-img-top mt-2 rounded rounded-2" alt="${movies[i].title}">
  <div class="card-body">
    <h5 class="card-title">${movies[i].title}</h5>
    <p class="card-text">${movies[i].year}</p>
    <p class="card-text">${movies[i].director}</p>
    <a href="#" class="btn btn-info" data-identificador="${movies[i].id}">More Info</a>
  </div>`;
            contenedorPeliculas.appendChild(card);         //container 
        }*/

    /*    movies.forEach(movie => {
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
        });*/
}

/* prueba retiro funcion I
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
} */

/*  prueba retiro funcion II
function cerrarModal(){
    botonCerrarModal.addEventListener("click", ()=>{
        ventanaModal.close();
        console.log("se presiono cerrar...")
                                                   });
}*/



document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log(urlBase);
        crearTarjetas(urlBase);   

      /*  const movies = await traerPeliculas(urlBase); //movieService.getAllMovies();
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
        });*/
        contenedorPeliculas.addEventListener("click", (evento)=>{
                                             //console.log(evento.target.dataset.identificador);
                                             if (evento.target.dataset.identificador!=="" && evento.target.dataset.identificador!==undefined){
                                                                                       evento.preventDefault();
                                                                                       console.log(evento.target);  
                                                                                       mostrarModal(evento.target.dataset.identificador);
                                                                                       cerrarModal();
                                                                                         }
                                                                                                                                            
                                            });  
       
       checkTitulo.addEventListener("change",()=>{
               habilitaDesabilita(ingresoTitulo);        
       });
       checkDirector.addEventListener("change",()=>{
                  habilitaDesabilita(ingresoDirector);      
       });
       checkYear.addEventListener("change",()=>{
                  habilitaDesabilita(ingresoYear);    
       });       
       botonBuscar.addEventListener("click",()=>{
          console.log(ingresoTitulo.value);
          console.log(ingresoDirector.value);
          console.log(ingresoYear.value);
          let queriesURL="";
          console.log(selectGenero[selectGenero.value]);
       if (ingresoTitulo.value!=""){
                             queriesURL=`titulo=${ingresoTitulo.value}`
                                          } 
       if (ingresoDirector.value!=""){
                                      if (queriesURL!="") {
                                             queriesURL=queriesURL+`&director=${ingresoDirector.value}`
                                                          } else queriesURL=`director=${ingresoDirector.value}`;
                                     }                     
                                                         
       if (ingresoYear.value!="") {
                                     if (queriesURL!="") {
                                            queriesURL=queriesURL+`&year=${ingresoYear.value}`;   
                                                         } else queriesURL=`year=${ingresoYear.value}`;

                                  }
       if (selectGenero[selectGenero.value]!=undefined){
                                     if (queriesURL!="") {
                                            queriesURL=queriesURL+`&genero=${selectGenero[selectGenero.value].textContent}`;   
                                                         } else queriesURL=`genero=${selectGenero[selectGenero.value].textContent}`;


                                  }


       if (queriesURL!="") {
                    queriesURL=urlBase+"?"+queriesURL;
                    queriesURL=queriesURL.replace(/ /g,"%20");
                    console.log(queriesURL);
                    crearTarjetas(queriesURL);                    
                           } else crearTarjetas(urlBase);

       /*
       let extensionURL="";
       if (selectGenero[selectGenero.value]!=undefined){
                                    contenedorPeliculas.textContent="";
                                    extensionURL=`${extensionURL}?genero=${selectGenero[selectGenero.value].textContent}`;
                                    console.log(urlBase+extensionURL);
                                    crearTarjetas(urlBase+extensionURL);
                                   }
      */


       });

    } catch (error) {
        console.error('Error al cargar películas:', error);
    }
});