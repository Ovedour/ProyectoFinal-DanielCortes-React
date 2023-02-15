//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom';

// Estilos
import './Home.css'

// Componentes

import { BsClipboardCheck } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
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
const Home = () => {

    return (
        <div>
            <main className='home'>
                <div className='home_texto'>
                    <div>
                        <img className='bannerbackground' alt='Food Background' src='/img/backgroundfood.png'>
                        </img>
                        <h2 className='logo'>Fooders</h2>
                        <h3 className='logo'>Sitio web de tus comidas favoritas</h3>
                        <p>Encuentra tu apetito</p>
                    </div>

                </div>
            </main>
            <div className="contenedor_categorias">
                <div className='carta_categoria'>
                    <Link to="/categoria/Pizza" className='categoria_nombre'><GiPizzaSlice className="icono_categoria" /></Link>
                    <p><Link to="/categoria/Pizza" className='categoria_nombre'>Pizza</Link></p>
                </div>
                <div className='carta_categoria'>
                    <Link to="/categoria/Pasta" className='categoria_nombre'><GiBerriesBowl className="icono_categoria" /></Link>
                    <p><Link to="/categoria/Pasta" className='categoria_nombre'>Pasta</Link></p>
                </div>
                <div className='carta_categoria'>
                    <Link to="/categoria/Tacos" className='categoria_nombre'><GiTacos className="icono_categoria" /></Link>
                    <p><Link to="/categoria/Tacos" className='categoria_nombre'>Tacos</Link></p>
                </div>
                <div className='carta_categoria'>
                    <Link to="/categoria/Mariscos" className='categoria_nombre'><GiDoubleFish className="icono_categoria" /></Link>
                    <p><Link to="/categoria/Mariscos" className='categoria_nombre'>Mariscos</Link></p>
                </div>
                <div className='carta_categoria'>
                    <Link to="/categoria/Antojitos" className='categoria_nombre'><TbSoup className="icono_categoria" /></Link>
                    <p><Link to="/categoria/Antojitos" className='categoria_nombre'>Antojitos Mexicanos</Link></p>
                </div>
                <div className='carta_categoria'>
                    <Link to="/categoria/Sushi" className='categoria_nombre'><GiSushis className="icono_categoria" /></Link>
                    <p><Link to="/categoria/Sushi" className='categoria_nombre'>Sushi</Link></p>
                </div>
                <div className='carta_categoria'>
                    <Link to="/categoria/Hamburguesa" className='categoria_nombre'><GiHamburger className="icono_categoria" /></Link>
                    <p><Link to="/categoria/Hamburguesa" className='categoria_nombre'>Hamburguesa</Link></p>
                </div>
                <div className='carta_categoria'>
                    <Link to="/categoria/Buffet" className='categoria_nombre'><GiKnifeFork className="icono_categoria" /></Link>
                    <p><Link to="/categoria/Buffet" className='categoria_nombre'>Buffet</Link></p>
                </div>
            </div>
            <h2 className='somos'>Encuentra la mejor manera de saciar tu apetito</h2>
            <div className='tarjetas_info'>
                <div className='tarjeta'>
                    <div>
                        <FaTruckMoving className='tarjeta_icon' />
                    </div>
                    <div className='tarjeta_info'>
                        <h3>A domicilio</h3>
                        <p>Restaurantes que pueden llegar a la puerta de tu casa.</p>
                    </div>
                </div>
                <div className='tarjeta'>
                    <div>
                        <FaHandshake className='tarjeta_icon' />
                    </div>
                    <div className='tarjeta_info'>
                        <h3>Comunidad</h3>
                        <p>Encuentra comentarios y calificaciones.</p>
                    </div>
                </div>
                <div className='tarjeta'>
                    <div>
                        <MdOutlineRestaurantMenu className='tarjeta_icon' />
                    </div>
                    <div className='tarjeta_info'>

                        <p>Menú</p>
                        <p>Antojate antes de tu visita.</p>
                    </div>
                </div>
                <div className='tarjeta'>
                    <div>
                        <BsClipboardCheck className='tarjeta_icon' />
                    </div>
                    <div className='tarjeta_info'>
                        <h3>Publica</h3>
                        <p>Si deseas registrarte, ¡Contactanos!</p>
                    </div>
                </div>
            </div>
            <h2 className='somos'>¿Quienes Somos?</h2>
            <div className='texto_home'>
                <div className='imagen_somos'>
                    <img alt="Orden app" src='/img/order.png'></img>
                </div>
                <div>
                    <p className='slogan'>Fooders planea ser una app/web para que las personas se puedan registrar y publicar su comercio gastronomico.</p>
                    <br />
                    <p>Que cualquier persona que cuente con un establecimiento gastronomico pueda registrarse y participar en esta app/web</p>
                    <br />
                    <p className='texto_especial'>Se busca llevar la tecnología dentro de una ciudad pequeña para mejorar los servicios gastronomicos.</p>
                </div>
            </div>
        </div>

    )
}


//        EXPORTACIÓN
export default Home