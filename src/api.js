

export async function traerPeliculas(pagina) {
    try {
        const response = await fetch(pagina);
        const data = await response.json();
        if (data.status>=400){
                                         throw new Error(data.errorMessages[0]);
                             }
        return data;
    } catch (error) {
        return (error.message);
    }
}

export const urlBase="http://localhost:3000/pelicula/"

/*
const data=await traerPeliculas(urlBase);
console.log(data);*/