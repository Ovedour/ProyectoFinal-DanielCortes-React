import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children})=>{

    const [productoCarList, setProductoCarList] = useState([]);

    const existeEnElCarrito = (id)=>{
        const elementoExistente = productoCarList.some((elemento)=>elemento.id === id);
        return elementoExistente;
    }

    const agregarAlCarrito = (producto, qty)=>{
        const newList = [...productoCarList];

        if(existeEnElCarrito(producto.id)){
            const productoIndex = productoCarList.findIndex(element=>element.id===producto.id);

            newList[productoIndex].quantity = newList[productoIndex].quantity + qty;

            newList[productoIndex].precioTotal = newList[productoIndex].quantity * newList[productoIndex].precio;

            setProductoCarList(newList)

        } else{
            const newProducto={...producto, quantity:qty, precioTotal: qty*producto.precio}
            const newList = [...productoCarList];
            newList.push(newProducto);
            setProductoCarList(newList);
        }
    }

    const eliminarProducto = (idProducto)=>{
        const copiaArray = [...productoCarList];
        const newArray = copiaArray.filter(elm=>elm.id !== idProducto);
        setProductoCarList(newArray);
    }

    const vaciarCarrito=()=>{
        setProductoCarList([])
    }

    const totalProductos = ()=>{
        const totalProductos = productoCarList.reduce((acc,item)=>acc + item.quantity,0);
        return totalProductos;
    }

    const obtenerTotal = () => {
        let total = 0
        productoCarList.forEach((e) => total += (e.quantity*e.precio))
        return total        
    };

    return(
        <CartContext.Provider value={{productoCarList,
                                    agregarAlCarrito, 
                                    eliminarProducto, 
                                    vaciarCarrito, 
                                    existeEnElCarrito, 
                                    totalProductos,
                                    obtenerTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider