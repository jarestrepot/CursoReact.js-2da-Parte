//Componentes funcionales.
//Utilizamos el sniper de React utilizando rfcp
import React, {useState} from 'react';//impòrtamos el useState
import PropTypes from 'prop-types';

//props son las propiedades
const FuncionSaludando = ( props ) => {
    //Breve introduccion a useState
    // const [variable, metodo para actulizarla] = useState(valor inicial);
    const [edad, setstate] = useState(25);

    const birthday = () => {
        // actualizar el State
        setstate( edad +1);
    }

    return (
        <div>
            <h1>
                !Hola {props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: {edad}
            </h2>
            <p>
                Lenguaje favorito: {props.lenguaje}
            </p>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


FuncionSaludando.propTypes = {
    name: PropTypes.string,
    lenguaje: PropTypes.string,
};


export default FuncionSaludando;
