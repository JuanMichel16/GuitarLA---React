import { useLoaderData } from "@remix-run/react";

import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "~/models/curso.server";

import ListadoGuitarras from "~/components/listado-guitarras";
import ListadoPosts from "~/components/listado-posts";
import Curso from "~/components/curso"


import styleBlog from "~/styles/blog.css";
import stylesGuitarras from "~/styles/guitarras.css";
import styleCurso from "~/styles/curso.css";


export const meta = () => {
  return {
    title: "GuitarLA - Home",
    descripcion: "GuitarLA - Home page, venta de guitarras"
  }
}

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras
    },
    {
      rel: "stylesheet",
      href: styleBlog
    },
    {
      rel: "stylesheet",
      href: styleCurso
    }
  ]
}


export const loader = async () => {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(), 
    getPosts(),
    getCurso()
  ]);

  return { guitarras, posts, curso}
}


function Index() {
  const datos = useLoaderData();

  return (
    <>
      <main className="contenedor">
          <ListadoGuitarras guitarras={datos.guitarras.data} />
      </main>

      <Curso curso={datos.curso.data.attributes}/>

      <section className="contenedor">
        <ListadoPosts posts={datos.posts.data} />
      </section>
    </>
  )
}

export default Index
