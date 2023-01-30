/**
 * Ejemplos Hooks:
 * -useState(),
 * -useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {

    /**
     * Inicializamos un estado vacio que va a rellenarse con 
     * los datos del contexto del padre
     */

    const state = useContext(miContexto);
    
    return (
        <div>
            <h1>
                EL Token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConTexto() {

    const estadoInicial ={
        token: '123456789',
        sesion: 1
    }

    /**
     * Creamos el estado de este componente
     */

    const [sesionData, setSessionData] = useState(estadoInicial);

    function random(min, max){
        return Math.floor(Math.random() * (max - min+1) + min)
        
    }

    function actulizarSesion(){
        setSessionData(
            {
                token: random(sesionData.token, sesionData.token * 1.1),
                sesion: sesionData.sesion + 1
            }
        );
    }

    return (
        <miContexto.Provider value={sesionData}>
            {/* Todo lo que esta aqui dentro puede leer los datos de sessionData */}
            {/* Ademas, si  se actuliza, los componentes de aqui, tambien lo actulizan*/}
            <h1>Ejemplo de useState() y useContext()</h1>
            <Componente1></Componente1>
            <button onClick={actulizarSesion}>Actulizar sesion</button>
        </miContexto.Provider>
    )
}


