/**
 * Ejemplo de uso de metodo componetDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privvado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privvado')
        
    });//Asi se ejecuta cada vez que se cambia el estado.
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


