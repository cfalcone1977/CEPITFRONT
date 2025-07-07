import {contenedorPeliculas, ventanaModal, botonCerrarModal} from "./app.js";
import { urlBase, traerPeliculas } from "./api.js";


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

