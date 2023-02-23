export const getCurso = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
    const resultado = await respuesta.json();

    return resultado
}