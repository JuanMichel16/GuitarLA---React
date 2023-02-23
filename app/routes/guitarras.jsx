import { Outlet } from "@remix-run/react";
import guitarras from "~/styles/guitarras.css";


export const meta = () => {
  return {
    title: "GuitarLA - Tienda de guitarras",
    descripcion: "GuitarLA - Nuestra Coleccion de Guitarras"
  }
}

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: guitarras
    }
  ]
}

const Tienda = () => {
  return (
    <main className="contenedor">
      <Outlet />
    </main>
  )
}

export default Tienda
