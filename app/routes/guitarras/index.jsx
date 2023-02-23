import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listado-guitarras";


export const meta = () => {
  return {
    title: "GuitarLA - Tienda de guitarras",
    descripcion: "GuitarLA - Nuestra Coleccion de Guitarras"
  }
}


export const loader = async () => {
  const guitarras = await getGuitarras();

  return guitarras.data

}

const Tienda = () => {
  const guitarras = useLoaderData();

  return (
      <ListadoGuitarras 
        guitarras={guitarras}
      />
  )
}

export default Tienda