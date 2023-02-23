//Este archivo indica que la peticion se ejecute unicamente en el servidor y no en el cliente. Es decir, los resultados van a salir en consola.

// De esta forma, el servidor se va encargar de hacer la consulta.

export const getGuitarras = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const resultado = await respuesta.json();

    return resultado
}


export const getGuitarra = async (guitarraUrl) => {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${guitarraUrl}&populate=imagen`);
    const resultado = await respuesta.json();

    return resultado;
}