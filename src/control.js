import {contenedorPeliculas, ventanaModal, botonCerrarModal} from "./app.js";
import { urlBase, traerPeliculas } from "./api.js";



export async function crearTarjetas(url){
          const movies = await traerPeliculas(url);     
          contenedorPeliculas.textContent="";                  
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
                    contenedorPeliculas.appendChild(card);   
                    }
                             }else {console.log("muestra mensaje no encontradas")
                                    mensajeNoEncontradas();                              
                                   };
}


export async function mostrarModal(identificador){
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

export function cerrarModal(){
        botonCerrarModal.addEventListener("click", ()=>{
        ventanaModal.close();
        console.log("se presiono cerrar...")
                                                   });
}


export function habilitaDesabilita(elemento){
  console.log(elemento);
  if (elemento.disabled){
                         elemento.disabled=false;
                        } else {elemento.disabled=true
                                elemento.value="";
                               };

}

export function mensajeNoEncontradas(){
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
                                    contenedorPeliculas.appendChild(cajaPeligro);    
}

