import React, { useState, useEffect } from 'react';

const Clock = ()=> {

    const persona = {
        name: 'Javier',
        apellidos: 'Restrepo Toro',
        edad: 0,
        fecha: new Date(),
    }
    const [edad, setEdad] = useState(persona.edad);

    

    useEffect(() => {
        const intervalUser = setInterval(() => sumarEdad(), 1000);
        return () =>{
            clearInterval(intervalUser);
        }
    });

    function sumarEdad(){
        setEdad( edad + 1 );
    }

    const styleEdad = {
        color: 'tomato',
        fontSize: '3rem',
        fontWeight: 'bold'
    }

    return (
        <div>
            <h1>Hora actual: { persona.fecha.toLocaleString() }</h1>
            <h3>Nombre: { persona.name } { persona.apellidos }</h3>
            <h1 style={ styleEdad }>Edad: { edad }</h1>
        </div>
    )
}



export default Clock;
