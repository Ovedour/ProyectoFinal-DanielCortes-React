//        IMPORTACIONES

// Modulos

// Estilos
import './AboutUs.css'

// Componentes



// Core


//        LOGICA

// Función constructora
const AboutUs = () => {

    return (
        <div>
            <div className='nosotros'>
                <div className='nosotros_cabecera'>
                    <div className='cabecera_texto'>
                        <h2>Fooders</h2>
                        <p>Una comunidad al servicio del cliente.</p>
                    </div>
                    <div className='cabecera_imagen'>
                        <img src='/img/us.png' alt='nosotros imagen'></img>
                    </div>
                </div>
                <div className='texto_nosotros'>
                    <p>Fooders planea ser una app/web para que las personas se puedan registrar y publicar su comercio gastronomico.</p>
                    <br />
                    <p>Se busca llevar la tecnología dentro de una ciudad pequeña para mejorar los servicios gastronomicos.  </p>
                    <br />
                    <p>Que cualquier persona que cuente con un establecimiento gastronomico pueda registrarse y participar en esta app/web</p>
                    <br />                 
                </div>
            </div>
       
            <div className='nosotros_cartel'>
                <p>¡Unete a Fooders!</p>
            </div>
        </div>

    )
}


//        EXPORTACIÓN
export default AboutUs