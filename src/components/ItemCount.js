import React from 'react'
import { useState } from 'react';


const ItemCount = (props) => {

    const initial  = 1
    const stock = 10

    const [estado, setEstado, onAdd] = useState(initial)

    const handleSumar = () =>{
        if(estado<stock) {
          setEstado(estado + 1)
        }
      }
      const handleRestar = () =>{
        setEstado(estado - 1 )
      }   
      const handleHacer = () =>{
        setEstado(1)
        onAdd(estado)
      }    
      
    return (
        <main>
            <h2>¡Contador de productos!</h2>
            <p>Mi Contador va : {estado} </p>
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleHacer}>Agregar</button>
            <button onClick={handleRestar}>Restar</button>
        </main>
    )
}

export default ItemCount