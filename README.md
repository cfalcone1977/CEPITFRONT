## Administrador de Películas Web (Frontend).    

Este proyecto es la interfaz de usuario (frontend) para el sistema de administración de películas. 
Permite a los usuarios visualizar, buscar y filtrar películas, así como ver detalles adicionales 
de cada una. Se conecta a una API RESTful (backend) para obtener y gestionar los datos de las películas.

### Características.   
**Visualización de Películas:**  
Muestra una lista de películas en formato de tarjetas.  
  
**Filtrado Dinámico:**  
Permite filtrar películas por título, director, año y género.  


**Detalles de Película:**  
Al hacer clic en una película, se abre un modal con información detallada (sinopsis, duración, géneros).  

**Diseño Responsivo:**  
Utiliza Bootstrap para asegurar una buena visualización en diferentes tamaños de pantalla.  


**Mensajes de Usuario:**  
Muestra mensajes claros cuando no se encuentran películas con los filtros aplicados.  


### Tecnologías Utilizadas  
**HTML5:**  
Estructura de la página web.  

**CSS3:**  
Estilos personalizados (app.css) y diseño.

**Bootstrap:**  
Framework CSS para componentes y diseño responsivo (enlazado como ../dist/styles.css).  


**JavaScript (ES Modules):**  
Lógica interactiva del frontend y consumo de la API.  


**Fetch API:**  
Para realizar solicitudes HTTP al backend.  


### Requisitos Previos:  

Para que esta aplicación frontend funcione correctamente, debes asegurarte de que:  
Tienes un navegador web moderno (Chrome, Firefox, Edge, Safari, etc.).  
El backend de administración de películas (el proyecto que documentamos anteriormente)   
esté corriendo y accesible en http://localhost:3000. Esta aplicación frontend depende  
completamente de ese backend para obtener los datos de las películas.  

### Instalación.  
**Sigue estos pasos para obtener el código y preparar el proyecto:**   
**Clonar el repositorio:**  
Abre tu terminal o línea de comandos y ejecuta:  
_git clone https://github.com/cfalcone1977/CEPITFRONT_  
  
**Uso (Ejecutar la Aplicación)**    
**Para ver la aplicación en funcionamiento:**  

**Inicia el Backend:**  
Asegúrate de que tu proyecto backend esté corriendo. Si lo configuraste como se indica en su README.md, puedes iniciarlo con:  
Desde la carpeta de tu backend:  
**npm run dev**  
Confirma que el servidor backend está escuchando en http://localhost:3000.  


      
**Abre el Frontend:**  
Simplemente abre el VSC, "File" - "Open Folder", selecciona la carpeta donde clonaste el   
repositorio y abre el archivo index.html. Estando en el archivo "index.html", haz clic   
con el boton derecho del mosue y selecciona la opcion "Open With Live Server".

La aplicación cargará automáticamente la lista de películas desde el backend.  

**Estructura Principal del Proyecto**  

├── index.html                  # Página principal de la aplicación  
├── app.js                      # Lógica principal del frontend, manejo de eventos DOM  
├── api.js                      # Funciones para interactuar con la API del backend  
├── control.js                  # Funciones auxiliares (creación de tarjetas, modal, habilitar/deshabilitar inputs)  
├── app.css                     # Estilos CSS personalizados para la interfaz  
├── images/                     # Carpeta para imágenes (ej. film Favicon.jpg, movies-collage.webp, Warning.gif)  
├── dist/                       # Contiene estilos compilados de Bootstrap (styles.css)  
└── README.md                   # Este archivo  

**Interacción con la API (Backend)**  
Esta aplicación frontend se comunica con el backend de administración de películas 
(documentado en su propio README.md) para obtener y manipular los datos.  


**Obtener todas las películas:**
Al cargar la página, se realiza una solicitud GET a http://localhost:3000/pelicula/ para mostrar todas las películas.  


**Filtrar películas:**
Cuando se utiliza el formulario de filtro y se presiona "BUSCAR", la aplicación construye una URL con parámetros de consulta y realiza una solicitud GET a la API.  


**Ver detalles de una película:**
Al hacer clic en el botón "More Info" de una tarjeta de película, la aplicación realiza una solicitud 
para obtener los detalles específicos y mostrarlos en un modal.

### 😎Disfruta filtrando y viendo detalles de las películas de tu interes😎!!  
Agradecimiento especial a Marcelo, Nahuel, Jorge y Natalia; por transmitirnos conocimientos para poder realizar este TP.

