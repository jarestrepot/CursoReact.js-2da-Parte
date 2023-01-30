import React, { useState } from 'react';
import Child from '../puros/child';

const Father = () => {

    const [name, setName] = useState('Javier');

    function showMessage(text){
        alert(`Mensaje recibido por el hijo nodo: ${text} `);
    }

    function updateName(newName){
        setName(newName);
    }
    return (
        <div style={{backgroundColor: 'tomato', padding: '10px'}}>
        {/* Tenemos que pasarle la prop que va a retornar el mensaje mas la funcion que hemos echo. */}
            <Child name={ name } send={ showMessage } update={ updateName }></Child>
        </div>
    );
}

export default Father;
