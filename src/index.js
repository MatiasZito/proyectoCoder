//1) Necesitamos la variable React en scope
//ES6 Module : import React from "react" 
//CommonJS: const React = require ("react")
import React from 'react'

//2) Necesitamos la variable ReactDOM en scope 
import ReactDOM from 'react-dom'

//3) Necesitamos un componente en scope 
//Una forma de escribirlo
/*function App (){
  return "Hola Mundo"
}*/
//Otra fomra de escribirlo como funcion flecha. 

import Proyecto from './Proyecto'
import './components/estilo.css'

//const Proyecto = () => "Hola Mumdo Flechita"

//4) Necesitamos poner el componente en el DOM 
ReactDOM.render(<Proyecto/>,document.getElementById("root"))

