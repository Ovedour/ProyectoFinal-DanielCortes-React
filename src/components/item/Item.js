//        IMPORTACIONES

// Modulos

// Estilos
import './Item.css'

// Componentes
import { Link } from 'react-router-dom'

// Core


//        LOGICA

// Función constructora
const Item = ({ item }) => {


    return (
        <div className='carta'>
            <div className='carta_contenedor'>
                <div className='carta_encabezado'>
                    <p>{item.categoria}</p>
                </div>
                <div className='carta_contenido'>
                    <div className='carta_img'>
                        <Link to={`/producto/${item.id}`}>
                            <img className='imagen' src={item.imagen} alt={item.nombre}></img>
                        </Link>
                    </div>
                    <div className='carta_contenedor_texto'>
                        <div className='carta_texto'>
                            <div className='carta_info'>
                                <Link className='carta_nombre' to={`/producto/${item.id}`}>{item.nombre}</Link>
                                <p className='carta_artista'>{item.establecimiento}</p>
                            </div>
                            <div className='ver_mas'>
                                <p className='carta_precio'>$ {item.precio}</p>
                                <Link className='link_vermas' to={`/producto/${item.id}`}>Detalles</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default Item
