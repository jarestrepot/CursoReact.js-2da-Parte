/**
 * Ejemplo de uso del método de ciclo de vida
 * en componente clase y el hook del ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from 'react'

export default class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes del que el componente sea añadido al DOM')
    }
    render() {
        return (
            <div>
                <h1>Didmount</h1>
            </div>
        )
    }
}

/**
 * 
 * @returns 
 */
export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes del que el componente sea añadido al DOM');
    }, []);//Con los corchetes indicamos que solo se mostrara una vez.

    return (
        <div>
            <h1>Didmount</h1>
        </div>
    );
}



