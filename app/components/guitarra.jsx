import { Link } from "@remix-run/react";

const Guitarra = ({guitarra}) => {
    const {nombre, descripcion, precio, url, imagen} = guitarra;

    return ( 
        <div className="guitarra">
            <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen Guitarra ${nombre}`} />
            <div className="contenido">
                <h3 className="titulo">{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>

                <Link className="enlace" to={`/guitarras/${url}`}>Ver producto</Link>
            </div>
        </div>
    );
}
 
export default Guitarra;