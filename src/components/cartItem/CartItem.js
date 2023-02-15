//        IMPORTACIONES

// Modulos
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

// Estilos
import './CartItem.css'

// Componentes
import { AiOutlineClose } from "react-icons/ai";

// Core


//        LOGICA

// Función constructora
const CartItem = ({item}) =>{

    const {eliminarProducto} = useContext(CartContext)
    
    return(
        <div className='contenedor_producto_carrito'>
            <div>
                <img className='imagen_carrito' src={item.imagen} alt={item.nombre}/>
            </div>
            
            <div className='texto_producto_carrito'>
                <div className='claves'>
                    <p className='clave'>Nombre</p>
                    <p className='clave'>Artista</p>
                    <p className='clave'>Precio U.</p>
                    <p className='clave'>Cantidad</p>
                    <p className='clave'>Total</p>
                </div>
                <div>
                    <div className='valores'>
                        <p className='valor'>{item.nombre}</p>
                        <p className='valor'>{item.artista}</p>
                        <p className='valor'>${item.precio}</p>
                        <p className='valor'>{item.quantity}</p>
                        <p className='valor'>${item.precioTotal}</p>
                    </div>
                </div>
            </div>
            <div className='borrar_producto'>
                <p onClick={()=>eliminarProducto(item.id)}><AiOutlineClose/></p>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default CartItem