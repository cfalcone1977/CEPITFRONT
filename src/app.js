import { urlBase } from './api.js';
import { habilitaDesabilita, mostrarModal, cerrarModal, crearTarjetas } from './control.js';

export const contenedorPeliculas=document.getElementById("movies-list"); //"container"
export const ventanaModal=document.getElementById("ventanaModal");
export const botonCerrarModal=document.getElementById("btncerrarModal");

const ingresoTitulo=document.getElementById("inputTitulo");
const ingresoDirector=document.getElementById("inputDirector");
const ingresoYear=document.getElementById("inputYear");
const selectGenero=document.getElementById("selectGenero");
const checkTitulo=document.getElementById("checkTitulo");
const checkDirector=document.getElementById("checkDirector");
const checkYear=document.getElementById("checkYear");
const botonBuscar=document.getElementById("botonBuscar");


document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log(urlBase);
        crearTarjetas(urlBase);   
        contenedorPeliculas.addEventListener("click", (evento)=>{
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

       });

    } catch (error) {
        console.error('Error al cargar películas:', error);
    }
});