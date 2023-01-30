/**
 * Ejemplo de todos los metodos en un componente de tipo clase.
 * Ejemplo de uso de hooks para un componente funcional.
 */


import React, { useEffect, useRef, useState } from 'react'

const AllCyclesHooks = () => {

    const personaInitial = {
        name: 'Javier',
        email: 'javier@gmail.com',
        edad: 24
    }

    const [data, setData] = useState(personaInitial);

    function cambiarData(){
        setData({
            name: 'Zeyu',
            email: 'zeyu@gmail.com',
            edad: data.edad + 1
        })
    }

    const miRef = useRef();

    useEffect(() => {
        const interval = setInterval(() =>{
            //Imprime en console cada segundo y medio.
            document.title = `${new Date()}`;
            console.log('Actulizacion del componente')
        }, 1500);

        return () => {
            console.log('Componente va a desaparecer');
            //Cuando desaparece el componente se elimina el intervalo.
            document.title = `Tiempo deteneido.`;
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1 ref={miRef}>Todos los Hooks</h1>
            <p>Nombre: {data.name}</p>
            <p>Edad: {data.edad}</p>
            <p>Email: {data.email}</p>
            <button onClick={cambiarData}>Cambiar data</button>
        </div>
    );
}

export default AllCyclesHooks;

