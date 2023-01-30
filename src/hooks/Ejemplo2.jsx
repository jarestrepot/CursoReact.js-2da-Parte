/**
 * Ejemplo de uso de:
 * - useState(),
 * -useRef() -> identificar elementos dentro de la vista
 * - useEffect() -> Cambios en la vista.
 */

import React, {useEffect, useState, useRef} from 'react';

const Ejemplo2 = () => {

    /**
     * Vamoree a crear dos contadores distintos,
     * cada uno en un estado diferente
     */
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    /**
     * Vamor a crear una referencia con useRef(), para asociar
     * una variable con un elemento del DOM del componente (vista HTML)
     */

    const miRef = useRef();

    /**
     * Funciones para modificar el estado del componente
     */
    function incrementarC1() {
        setContador1( contador1 + 1 );
    }

    function incrementarC2() {
        setContador2( contador2 + 1 );
    }

    /**
     * Trabajandop con el UseEffect
     */

    /**
     * ?Caso 1: Ejecutar SIEMPRE un snippet de codigo
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM: ');
    //     console.log(miRef);
    // });


    /**
     * ? Caso 2: Ejecutar solo cuando cambie el contado1
     * Cada vez que haya un cambio en el contador 1, se ejecutara lo que diga 
     * el useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 ');
    //     console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM: ');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso 3: Ejecutar solo cuando cambie el contado1 o contador2
     * Cada vez que haya un cambio en el contador 1 o contador 2, se ejecutara lo que diga 
     * el useEffect()
     */

    
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM: ');
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>
                Ejemplo de useState(), useRef(), useEffect()
            </h1>
            <h2>
                CONTADOR 1: {contador1}
            </h2>
            <h2>
                CONTADOR 2: {contador2}
            </h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementarC1}>
                    Incrementar contador 1
                </button>
                <button onClick={incrementarC2}>
                    Incrementar contador 2
                </button>
            </div>
        </div>
    );
}

export default Ejemplo2;
