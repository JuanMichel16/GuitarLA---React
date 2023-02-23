import styles from "~/styles/carrito.css";

export const meta = () => {
    return {
        title: "GuitarLA - Carrito de compras",
        description: "venta de guitarras, carrito de compras"
    }
}

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

const Carrito = () => {
    return ( 
        <main className="contenedor">
            <h1 className="heading">Carrito de compras</h1>

            <div className="contenido">
                <div className="carrito">
                    <h2>Articulos</h2>
                </div>

                <aside className="resumen">
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: </p>
                </aside>
            </div>
        </main>
    );
}
 
export default Carrito;