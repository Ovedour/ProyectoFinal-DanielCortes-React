//        IMPORTACIONES

// Modulos

// Estilos
import './Footer.css'

import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";

// Componentes


// Core


//        LOGICA

// Función constructora
const Footer = () =>{
    
    return(
        <footer className='footer'>
            <div className='footer_division'>
                <div className='footer_contact'>
                    <label>Suscríbete con nosotros</label>
                    <input type="email" placeholder="email@example.com...."></input> 
                </div>
                <div className='contacto'>
                    <h4>Contactanos</h4>
                    <div className='contacto_info'>
                        <p><MdCall/> (+99) 99 9999-9999</p>
                        <a href='#/'><MdOutlineAlternateEmail/> daniel.svefn@gmail.com</a>
                    </div>
                </div>
                <div className='footer_redes'>
                    <a href="#/"><FaWhatsapp className='redes_icon'/></a>
                    <a href="#/"><FaTiktok className='redes_icon'/></a>
                    <a href="#/"><FaTwitter className='redes_icon'/></a>
                    <a href="#/"><FaInstagram className='redes_icon'/></a>
                </div>
                
            </div>
            <div className='footer_copyright'>
                <p>
                <FaCopyright className='copyright_icon'/>2022 - Fooders - Sitio Web Desarrollado Por Daniel Cortes.
            </p>
            </div>

        </footer>
    )
}


//        EXPORTACIÓN
export default Footer