//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'

// Estilos
import './ItemDetail.css'

// Componentes
import ItemCount from '../itemCount/ItemCount'
import { AiOutlineCheck } from "react-icons/ai";




// Core


//        LOGICA

// Función constructora
const ItemDetail = ({ item }) => {

    const { agregarAlCarrito } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)

    const agregar = (contador) => {
        agregarAlCarrito(item, contador);
        setCantidad(contador);
    }


    return (
        <div>
            <div className='info_principal'>
                <div className='contenedor_img'>
                    <img src={item.imagen} alt={item.nombre}></img>
                </div>
                <div className='contenedor_info'>
                    <div className='enlaces_atras'>
                        <Link className='link_atras' to="/">Home<span>/</span></Link>
                        <Link className='link_atras' to={`/categoria/${item.categoria}`}> {item.categoria}<span>/</span></Link>
                        <Link className='link_atras' to={`/productos`}>Productos<span>/</span></Link>
                        <a className='link_atras' href='#!'> {item.nombre} - {item.establecimiento}</a>
                    </div>
                    <h2 className='info_nombre'>{item.nombre} - {item.establecimiento}</h2>
                    <p className='info_precio'>$ {item.precio}</p>
                    <ul className='contenedor_info_lista'>
                        <li className='lista_info_genero'>Categoria: <p>{item.categoria}</p></li>
                        <li className='lista_info_canciones'>Calificación: <p>{item.calificacion}</p></li>
                    </ul>
                    <div>
                        <ul>
                            <li><a href="#modal1" className='formas_de_pago'>Formas de pago</a></li>
                        </ul>
                        <div id="modal1" className="modalmask">
                            <div className="modalbox movedown">
                                <a href="#close" title="Close" className="close">X</a>
                                <h2>Formas de Pago</h2>
                                <div className='info_modal'>
                                    <h4>Tarjetas de Crédito</h4>
                                    <p>Acreditación instantanea</p>
                                    <div className='plataformas_pago'>
                                        <p>Hasta 3 cuotas sin interes</p>
                                        <img src='/img/visa.png' alt='logo visa'></img>
                                        <img src='/img/masterCard.png' alt='logo mastercard'></img>
                                        <img src='/img/americanexpress.png' alt='logo american express'></img>
                                    </div>
                                    <h4>Tarjetas de Débito</h4>
                                    <p>Acreditación instantanea</p>
                                    <div className='plataformas_pago'>
                                        <img src='/img/maestro.png' alt='logo tarjeta maestro'></img>
                                        <img src='/img/masterCardDebit.png' alt='logo mastercard debito'></img>
                                        <img src='/img/visaDebito.png' alt='logo visa debito'></img>
                                    </div>
                                    <h4>Efectivo</h4>
                                    <div className='plataformas_pago'>
                                        <img src='/img/pagoFacil.png' alt='logo pago facil'></img>
                                        <img src='/img/rapipago.png' alt='logo rapipago'></img>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='stock_disponible'>
                        <p><span>{item.stock}</span> Unidades Disponibles</p>
                    </div>
                    <div className='carta_compra'>
                        <ItemCount initial={1} stock={item.stock} agregar={agregar} />
                        {
                            cantidad > 0 &&
                            <p className='agregado_exitoso'><AiOutlineCheck className='check_correcto' /> ¡Producto Agregado con Exito!</p>
                        }
                    </div>
                </div>
            </div>
            <div className='info_descripcion'>
                <h4>Descripción</h4>
                <p>{item.descripcion}</p>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default ItemDetail

