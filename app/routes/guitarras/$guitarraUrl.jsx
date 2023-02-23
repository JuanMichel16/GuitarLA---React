import { getGuitarra } from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";


export const loader = async ({ params }) => {
    const { guitarraUrl } = params;
    const guitarra = await getGuitarra(guitarraUrl);

    if(guitarra.data.length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Guitarra no encontrada"
        })
    }

    return guitarra
}


// Esta propiedad data esta disponible una vez que el loader obtiene informacion. Si no hay informacion en el data devuelve un undefined, asi es como validaremos si existe o no la guitarra
export const meta = ({data}) => {

    if(!data) {
        return {
            title: `GuitarLA - Guitarra no encontrada`,
            description: `Guitarras, venta de guitarras, guitarra no encontrada`
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
    }
}


const Guitarra = () => {
    const guitarra = useLoaderData();
    const { nombre, descripcion, precio, imagen} = guitarra.data[0].attributes;

    return ( 
        <div className="guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">${precio}</p>
            </div>

        </div>
     );
}
 
export default Guitarra;