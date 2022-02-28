import React from 'react'



const ItemListContainer = (greeting) => {
    const {nombre} = greeting
  
  return (
    <main>
        <h2>¡Bienvenido {nombre}!</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, saepe debitis. Delectus magnam aspernatur, reiciendis, temporibus nihil qui vel veniam voluptatibus incidunt voluptate sed minima, doloribus quasi sit odio quis.</p>
    </main>
  );
}

export default ItemListContainer