import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server.js";

import { formatearFecha } from "../../utils/helpers";


export const meta = ({data}) => {

    if(!data) {
        return {
            title: `GuitarLA - Entrada no encontrada`,
            description: `Guitarras, venta de guitarras, entrada no encontrada`
        }
    }

    return {
        title: `GuitarLA - ${data.attributes.titulo}`,
        description: `Guitarras, venta de guitarras, entrada ${data.attributes.titulo}`
    }
}

export const loader = async ({params}) => {
    const post = await getPost(params.postURL);
    return post?.data[0];
}

const Post = () => {
    const post = useLoaderData();
    const { titulo, contenido, publishedAt, imagen } = post?.attributes;
    return ( 
        <article className="contenedor post mt-3">
            <img src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />

            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>
    );
}
 
export default Post;