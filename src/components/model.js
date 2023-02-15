//        IMPORTACIONES

// Modulos

// Estilos
import './modeloC.css'

// Componentes
import ModelC from '../'


// Core


//        LOGICA

// Función constructora
const modeloC = (props) =>{
    
    return(
        <header>
            <p>Mi Primer Enlace y te saludo: {props.saludo} y cuando me retiro digo: {props}</p>
        </header>
    )
}


//        EXPORTACIÓN
export default modeloC