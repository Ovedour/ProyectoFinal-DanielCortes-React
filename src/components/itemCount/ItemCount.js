//        IMPORTACIONES

// Modulos
import { useState } from 'react'

// Estilos
import './ItemCount.css'

// Componentes
import { BsCartPlus } from "react-icons/bs";


// Core


//        LOGICA

// Función constructora
const ItemCount = ({stock, initial, agregar}) =>{
    
    // Agrego un manejo de estado
    const [contador , setContador] = useState(initial);

    // Funcion de sumar uno con un maximo de stock
    const sumarUno = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    // Funcion de restar 1 al contador seteando un minimo de 0
    const restarUno = () => {
        if(contador>1){
            setContador(contador  -1)
        }
    }

    

    return(
        <div className='contador'>
            <div className='contador_cantidad'>
                <button disabled={stock===0} onClick={restarUno}>-</button>
                <p>{contador}</p>
                <button disabled={stock===0} onClick={sumarUno}>+</button>
            </div>
            <div className='contador_agregar'>
                <button disabled={stock === 0} className='agregar_icono' onClick={()=>agregar(contador)}>Agregar al Carrito <BsCartPlus/></button>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default ItemCount