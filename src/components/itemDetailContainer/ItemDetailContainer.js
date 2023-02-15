//        IMPORTACIONES

// Modulos
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

// Estilos
import './ItemDetailContainer.css'

// Componentes
import ItemDetail from '../itemDetail/ItemDetail'

// Core


//        LOGICA

// Función constructora
const ItemDetailContainer = () =>{

    const {productoId} = useParams()

    const [item, setItem] = useState({});

    useEffect(()=>{
        const getProducto = async()=>{
            const queryRef = doc(db,"listaDeProducto",productoId);
            const response = await getDoc(queryRef);
            const newDoc = {
                id:response.id,
                ...response.data()
            }
            setItem(newDoc);
        }
        getProducto();
    },[productoId])

    return(
        <article>
            <ItemDetail item={item}/>
        </article>
        
    )
}


//        EXPORTACIÓN
export default ItemDetailContainer