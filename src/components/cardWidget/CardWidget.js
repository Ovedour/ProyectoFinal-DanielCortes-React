//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

// Estilos
import './CardWidget.css'


// Componentes
import { BsCart2 } from "react-icons/bs";


// Core

//        LOGICA

// Función constructora
const CardWidget = () =>{  
    
    const {totalProductos, productoCarList} = useContext(CartContext);
    
    return(
        <div className='carrito'>
            <div>
                <Link to="/carrito">
                    <BsCart2 className='carrito_icon'/>
                </Link>
            </div>
            {
                productoCarList.length > 0 &&
                <>
                    <div className='carrito_numero'>
                        {totalProductos()}
                    </div>
                </>
            }
        </div>
    )
}




//        EXPORTACIÓN
export default CardWidget
