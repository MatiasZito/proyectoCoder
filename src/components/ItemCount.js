import React from 'react'
import { useState } from 'react';


const ItemCount = ( {initial, stock} ) => {

    const [estado, setEstado] = useState(initial)

    const handleSumar = () =>{
        if(estado<stock) {
          setEstado(estado + 1)
        }
      }
      const handleRestar = () =>{
        setEstado(estado - 1 )
      }   
      const handleonAdd = () =>{
        console.log({estado})
      }    
      
    return (
        <main>
            <h2>¡Contador de productos!</h2>
            <p>Mi Contador va : {estado} </p>
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleonAdd}>Agregar</button>
            <button onClick={handleRestar}>Restar</button>
        </main>
    )
}

export default ItemCount