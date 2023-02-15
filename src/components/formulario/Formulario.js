//        IMPORTACIONES

import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../services/firebase";
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Estilos
import './Formulario.css'


// componentes

//        LOGICA

// Función constructora
const Formulario = () =>{

    const {productoCarList, obtenerTotal} = useContext(CartContext);

    // const [ordenId, setOrdenId] = useState(undefined)

    // const enviarOrden = async(event) => {
    //     const nuevaOrden = {
    //         comprador:{
    //             nombre: "",
    //             telefono: "",
    //             email: "",
    //             provincia: "",
    //             localidad: "",
    //             calle:"",
    //             numeroCalle: "1290",
    //             codigoPostal: "",
    //             datoComprobante: {ordenId}
                
    //         },
    //         items: productoCarList,
    //         total: "",
    //     }
    //     const queryRef = collection(db,"ordenes")
    //     const response = await addDoc(queryRef, nuevaOrden)
    //     setOrdenId(response.id)
    // }
    
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    return(
        <Formik
            initialValues={{
                nombre:'',
                telefono:'',
                email:'',
                provincia:'',
                localidad:'',
                calle:'',
                numero:'',
                postal:'',
                metodoPago:'',
                facturacion:'',
                datoFacturacion:'',
            }}

            validate={(valores) =>{
                let errores = {}

                // ERROR NOMBRE
                // if(!valores.nombre){
                //     errores.nombre= 'Por favor, ingresa un nombre y apellido.'
                // } else if(!/^[a-zA-ZÀ-ÿ\s]{1,25}$/.test(valores.nombre)){
                //     errores.nombre= 'Solo deben ingresarse letras o espacios.'
                // }

                // // ERROR TELEFONO
                // if(!valores.telefono){
                //     errores.telefono= 'Por favor, ingresa un número de telefono.'
                // } else if(!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(valores.telefono)){
                //     errores.telefono= 'El número no es valido.'
                // }

                // // ERROR EMAIL
                // if(!valores.email){
                //     errores.email= 'Por favor, ingresa un email.'
                // } else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valores.email)){
                //     errores.email= 'El email no es valido.'
                // }

                // // ERROR PROVINCIA
                // if(!valores.provincia){
                //     errores.provincia= 'Por favor, ingresa una provincia.'
                // } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.provincia)){
                //     errores.provincia= 'Solo deben ingresarse letras o espacios.'
                // }

                // // ERROR PROVINCIA
                // if(!valores.localidad){
                //     errores.localidad= 'Por favor, ingresa una localidad.'
                // } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.localidad)){
                //     errores.localidad= 'Solo deben ingresarse letras o espacios.'
                // }

                // // ERROR PROVINCIA
                // if(!valores.calle){
                //     errores.calle= 'Por favor, ingresa una calle.'
                // } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.calle)){
                //     errores.calle= 'Solo deben ingresarse letras o espacios.'
                // }

                // // ERROR NÚMERO DE CALLE
                // if(!valores.numero){
                //     errores.numero= 'Por favor, ingresa el número de la calle.'
                // } else if(!/^[0-9]{1,5}$/.test(valores.numero)){
                //     errores.numero= 'El número no es valido.'
                // }

                // // ERROR CODIGO POSTAL
                // if(!valores.postal){
                //     errores.postal= 'Por favor, ingresa el codigo postal.'
                // } else if(!/^[0-9]{1,4}$/.test(valores.postal)){
                //     errores.postal= 'El codigo postal no es valido.'
                // }

                // // ERROR DNI
                // if(!valores.datoFacturacion){
                //     errores.datoFacturacion= 'Por favor, ingresa el DNI.'
                // } else if(!/^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/.test(valores.datoFacturacion)){
                //     errores.datoFacturacion= 'El DNI no es valido.'
                // }

                return errores
            }}

            onSubmit={ ( valores, {resetForm}) =>{
                resetForm();
                console.log("Formulario Enviado");
                cambiarFormularioEnviado(true)
                setTimeout(() => cambiarFormularioEnviado(false), 5000)
            }}
        >
            {( { errors} ) => (
                <Form>
                    <div className='formulario_datos'>
                        {/* TITULO */}
                        <h4>Finalizar Compra:</h4>
                        <p className='advertencia'>Por favor, ingresá los datos del destinatario.</p>

                        {/* FORMULARIO */}
                        <div className='datos_inputs'>
                            {/* Nombre */}
                            <div>
                                <label htmlFor='Nombre'><span className="span_formulario">(*)</span> Nombre Y Apellido</label>
                                <Field 
                                type="text" 
                                id="nombre" 
                                name="nombre" 
                                autoComplete='off'/>
                                <ErrorMessage name='nombre' component={() => (
                                    <div className='error'>{errors.nombre}</div>
                                )}/>
                            </div>

                            {/* Telefono */}
                            <div>
                                <label htmlFor='Telefono'><span className="span_formulario">(*)</span> Telefono</label>
                                <Field 
                                type="number" 
                                id="telefono" 
                                name="telefono" 
                                autoComplete='off'/>
                                <ErrorMessage name='telefono' component={() => (
                                    <div className='error'>{errors.telefono}</div>
                                )}/>
                            </div>
                            {/* Email */}
                            <div>
                                <label htmlFor='Email'><span className="span_formulario">(*)</span> Email</label>
                                <Field 
                                type="email" 
                                id="email" 
                                name="email" 
                                autoComplete='off'/>
                                <ErrorMessage name='email' component={() => (
                                    <div className='error'>{errors.email}</div>
                                )}/>
                            </div>
                            {/* Estado/Provincia */}
                            <div>
                                <label htmlFor='Provincia'><span className="span_formulario">(*)</span> Provincia</label>
                                <Field 
                                type="text" 
                                id="provincia" 
                                name="provincia" 
                                autoComplete='off'/>
                                <ErrorMessage name='provincia' component={() => (
                                    <div className='error'>{errors.provincia}</div>
                                )}/>
                            </div>
                            {/* Localidad */}
                            <div>
                                <label htmlFor='Localidad'><span className="span_formulario">(*)</span> Localidad</label>
                                <Field 
                                type="text" 
                                id="localidad" 
                                name="localidad" 
                                autoComplete='off'/>
                                <ErrorMessage name='localidad' component={() => (
                                    <div className='error'>{errors.localidad}</div>
                                )}/>
                            </div>
                            {/* Calle */}
                            <div>
                                <label htmlFor='Calle'><span className="span_formulario">(*)</span> Calle</label>
                                <Field 
                                type="text" 
                                id="calle" 
                                name="calle" 
                                autoComplete='off'/>
                                <ErrorMessage name='calle' component={() => (
                                    <div className='error'>{errors.calle}</div>
                                )}/>
                            </div>
                            {/* Numero de Calle */}
                            <div>
                                    <label htmlFor='Calle'><span className="span_formulario">(*)</span> Número</label>
                                    <Field 
                                    type="number" 
                                    id="numero" 
                                    name="numero" 
                                    autoComplete='off'/>
                                    <ErrorMessage name='numero' component={() => (
                                        <div className='error'>{errors.numero}</div>
                                    )}/>
                                </div>
                                {/* Codigo Postal */}
                                <div>
                                    <label htmlFor='CodigoPostal'><span className="span_formulario">(*)</span> Codigo Postal</label>
                                    <Field 
                                    type="number" 
                                    id="postal" 
                                    name="postal" 
                                    autoComplete='off'/>
                                    <ErrorMessage name='postal' component={() => (
                                        <div className='error'>{errors.postal}</div>
                                    )}/>
                                </div>
                        </div>
                    </div>
                    <hr className='linea_separativa' />
                    {/* Pago */}
                    <div>
                        {/* Selectores de Pago */}
                        <div className='datos_selectores'>
                            {/* Metodo de Pago */}
                            <div>
                                <label htmlFor='CodigoPostal'><span>(*)</span> Metodo de Pago</label>
                                <Field 
                                name='metodoPago'
                                as="select">
                                    <option value="MercadoPago">MercadoPago</option>
                                    <option value="PayPal">PayPal</option>
                                </Field>
                            </div>
                            {/* Datos de Facturación */}
                            <div>
                                <label htmlFor='facturacion'><span>(*)</span> Datos de la Facturación</label>
                                <Field 
                                name='facturacion' 
                                as="select">
                                    <option value="ConsumidorFinal">Factura B - Consumidor Final</option>
                                    <option value="Monotributo">Factura B - Monotributo</option>
                                </Field>
                            </div>
                        </div>

                        {/* DNI */}
                        <div className='dni'>
                            <label htmlFor='DatoFacturacion'><span className="span_formulario">(*)</span> DNI</label>
                            <Field 
                            type="number" 
                            id="datoFacturacion" 
                            name="datoFacturacion" 
                            autoComplete='off'/>
                            <ErrorMessage name='datoFacturacion' component={() => (
                                <div className='error'>{errors.datoFacturacion}</div>
                            )}/>
                            <p className='solicitamos'>Te solicitamos estos datos porque son requeridos para realizar la facturación según la legislación vigente.</p>
                        </div>
                        
                        <hr className='linea_separativa' />    
                        
                        {/* RESUMEN DE COMPRA */}
                        <div className='resumen_compra'>
                            <h4>Tu Pedido</h4>
                            <div className='clave_resumen'>
                                <p>PRODUCTO</p>
                                <p>SUBTOTAL</p>
                            </div>

                            {
                                productoCarList.map( item => (
                                    <div className='productos_resumen'>
                                        <div>
                                            <p>{item.nombre} - {item.artista} <span>x</span> {item.quantity} </p>
                                        </div>
                                        <div>
                                            <p>${item.precioTotal} </p>
                                        </div>
                                    </div>
                                ))
                            }

                            {/* TOTAL */}
                            <div className='datos_finales'>
                                <p>Monto final : ${obtenerTotal()}</p>
                            </div>

                            {/* BOTON FINALIZAR COMPRA */}
                            <div className='boton_enviar'>
                                <button type='sumbit'>Finalizar Compra</button>
                                {/* <button type='sumbit' onClick={enviarOrden}>Finalizar Compra</button> */}
                                {
                                    formularioEnviado &&
                                        <div className='exito'>
                                            <p> Formulario enviado con exito.</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>


                </Form>
            )}
        </Formik>
    )
}


//        EXPORTACIÓN
export default Formulario
