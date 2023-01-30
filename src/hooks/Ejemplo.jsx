/* Ejemplo del uso del Hook useState
*
* Crear un componente de tipo funcion y acceder a su estado 
privado a traves de un hook y, ademas, poder modificarlo.
rfc para funcion
*/
import React, { useState } from 'react';

const Ejemplo = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona

    const personaInicial = {
        nombre: 'Javier', 
        email: 'javier@gmail.com'
    }

    /**
     * Queremos que el VALORINICIAL Y PERSONAINICIAL sean 
     * parte del estado del componente pera asi poder gestionar 
     * su cambio, y que este se vea reflejado en la vista del componente.
     * 
     * const[nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */

    function inicrementarContador(){
        //? funcionParaCambiar(nuevoValor)
        setContador( contador + 1 );
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */

    function actulizarPersona(){
        setPersona( 
            {
                nombre:"Valentina Alzate",
                email: "valzate618@gamil.com"
            }
        )
    }

    return (
        <div>
            <h1>
                Ejemplo de useState()
            </h1>
            <h2>
                CONTADOR: {contador}
            </h2>
            <h2>
                DATOS DE LA PERSONA: 
            </h2>
            <ul>
                <li>
                    <strong>NOMBRE: </strong>{persona.nombre}
                </li>
                <li>
                    <strong>EMAIL: </strong>{persona.email}
                </li>
            </ul>
            {/* Bloque de botones para actualizar el estado del componente */}
            <div>
                <button onClick={inicrementarContador}>
                    Incrementar contador
                </button>
                <button onClick={actulizarPersona}>
                    Actualizar persona
                </button>
            </div>
        </div>
    );
}

export default Ejemplo;
