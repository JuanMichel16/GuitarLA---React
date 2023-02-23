import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export const meta = () => {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de musica"
  }
}

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    }, 
    {
      rel: "preload",
      href: imagen,
      as: "image"  
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div className="">
          <p>
            Fusce consequat, velit luctus volutpat ultricies, dui magna tristique ante, id interdum ante arcu sed quam. Nam placerat ligula dui, ut lacinia lorem dictum non. Aenean sapien nunc, congue at purus et, dictum ullamcorper lorem. Integer cursus enim porta, egestas dolor mattis, efficitur enim. Etiam in tellus at sem condimentum scelerisque eu vitae sapien. Donec efficitur at erat nec dignissim. Etiam at nunc venenatis, facilisis erat quis, vehicula tortor. Vestibulum nunc ante, commodo in dapibus id, tempor in eros. In hac habitasse platea dictumst. Cras vulputate turpis augue, ac gravida dolor egestas at. Ut ultricies nibh ipsum, non bibendum metus dictum eget. Integer viverra porta neque eget fermentum. Curabitur quis lectus viverra, euismod dui eget, venenatis mauris.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
