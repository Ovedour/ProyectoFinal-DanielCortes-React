//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom'


// Estilos
import './ItemList.css'

// Componentes
import Item from '../item/Item.js'

import { GiPizzaSlice } from "react-icons/gi";
import { GiTacos } from "react-icons/gi";
import { GiBerriesBowl } from "react-icons/gi";
import { GiDoubleFish } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
import { GiHamburger } from "react-icons/gi";
import { GiSushis } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";

// Core


//        LOGICA

// Función constructora
const ItemList = ({item}) =>{


    return(
        <div className='contenedor_productos'>
            <div>
                <div className='botones_categorias'>
                    <button><Link to="/productos" className='link_categoria'>Mostrar Todos</Link></button>
                </div>
                <div className="contenedor_categorias">
                    <div className='carta_categoria'>
                        <Link to="/categoria/Pizza" className='categoria_nombre'><GiPizzaSlice className="icono_categoria"/></Link>
                        <p><Link to="/categoria/Pizza" className='categoria_nombre'>Pizza</Link></p>
                    </div>
                    <div className='carta_categoria'>
                        <Link to="/categoria/Pasta" className='categoria_nombre'><GiBerriesBowl className="icono_categoria"/></Link>
                        <p><Link to="/categoria/Pasta" className='categoria_nombre'>Pasta</Link></p>
                    </div>
                    <div className='carta_categoria'>
                        <Link to="/categoria/Tacos" className='categoria_nombre'><GiTacos className="icono_categoria"/></Link>
                        <p><Link to="/categoria/Tacos" className='categoria_nombre'>Tacos</Link></p>
                    </div>
                    <div className='carta_categoria'>
                        <Link to="/categoria/Mariscos" className='categoria_nombre'><GiDoubleFish className="icono_categoria"/></Link>
                        <p><Link to="/categoria/Mariscos" className='categoria_nombre'>Mariscos</Link></p>
                    </div>
                    <div className='carta_categoria'>
                        <Link to="/categoria/Antojitos" className='categoria_nombre'><TbSoup className="icono_categoria"/></Link>
                        <p><Link to="/categoria/Antojitos" className='categoria_nombre'>Antojitos Mexicanos</Link></p>
                    </div>
                    <div className='carta_categoria'>
                        <Link to="/categoria/Sushi" className='categoria_nombre'><GiSushis className="icono_categoria"/></Link>
                        <p><Link to="/categoria/Sushi" className='categoria_nombre'>Sushi</Link></p>
                    </div>
                    <div className='carta_categoria'>
                        <Link to="/categoria/Hamburguesa" className='categoria_nombre'><GiHamburger className="icono_categoria"/></Link>
                        <p><Link to="/categoria/Hamburguesa" className='categoria_nombre'>Hamburguesa</Link></p>
                    </div>
                    <div className='carta_categoria'>
                        <Link to="/categoria/Buffet" className='categoria_nombre'><GiKnifeFork className="icono_categoria"/></Link>
                        <p><Link to="/categoria/Buffet" className='categoria_nombre'>Buffet</Link></p>
                    </div>
                </div>
                <div className='cartas_productos'>
                {
                    item.map(producto=>(
                        <Item key={producto.id} item={producto}/>
                ))
            }
                </div>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default ItemList
