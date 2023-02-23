export const getPosts = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const resultado = await respuesta.json();

    return resultado
}

export const getPost = async (postURL) => {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${postURL}&populate=imagen`);
    const resultado = await respuesta.json();

    return resultado;
}