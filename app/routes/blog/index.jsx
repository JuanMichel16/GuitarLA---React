import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server.js";
import ListadoPosts from "~/components/listado-posts"


export const meta = () => {
  return {
    title: "GuitarLA - Nuestro Blog",
    description: "GuitarLA, Blog de musica, venta de guitarras"
  }
}

export const loader = async () => {
  const posts = await getPosts();
  return posts?.data;
}

const Blog = () => {
  const posts = useLoaderData();

  return (
    <div>
        <ListadoPosts posts={posts}/>
    </div>
  )
}

export default Blog