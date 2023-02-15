//        IMPORTACIONES

// Modulos

import { Link } from 'react-router-dom'


// Estilos
import './NavBar.css'

// Componentes
import CardWidget from '../cardWidget/CardWidget'



// Core


//        LOGICA

// Función constructora
const NavBar = () => {

    return (

        <header>

            <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img alt="Logo camarero" src='/img/waiter.png'></img></Link>
                </div>
                <div className='logoname'>
                <Link to="/"><h2 className='logonameh'>Fooders</h2></Link>
                </div>
                <div className="menu">
                    <ul>
                        <li className="menu_link"><Link to="/">Home</Link></li>
                        <li className="menu_link"><Link to="/productos">Productos</Link></li>
                        <li className="menu_link"><Link to="/nosotros">Nosotros</Link></li>
                    </ul>
                </div>
                <div>
                    <CardWidget />
                </div>
            </nav>
        </header>
    )
}


//        EXPORTACIÓN
export default NavBar