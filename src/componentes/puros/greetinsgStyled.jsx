import React, { useState } from 'react';

//Definiendo estilos en constantes

//? Estilo para usuario logueado
const loggedStyles = {
    color: 'white',
    fontSize: '2rem',
}

// ? Estilo para usuario no logueado
const unloggedStyles = {
    color: 'tomato',
    fontWeight: 'bold',
}

const buttonLoggedStyles = {
    color: '#72B4BA',
    backgroundColor: '#210005',
    display: 'block',
    width: '200px',
    height: '30px',
    fontSize: '1.4rem',
}

const buttonUnloggedStyles = {
    color: '#D94343',
    backgroundColor: '#210005',
    display: 'block',
    width: '200px',
    height: '30px',
    fontSize: '1.4rem'
}




const GreetinsgStyled = (props) => {

    //Generamos un estado para el componente.
    // y asi controlar si el usuario esta logeado o no.
    const [logged, setLogged] = useState(false);

    const greetenUser = () => (<p>Hola, {props.name}</p>);
    const pleaseLogin =()=> ( <p>Please login</p> );

    return (
        <div style={ logged ? loggedStyles : unloggedStyles}>

            {/* { logged ? (<p>Hola, {props.name}</p>) : ( <p>Please login</p> ) } */}
            { logged ? greetenUser() : pleaseLogin() }
            
            {/* Le decimos que cada vez que se clique cambia el valor del logged de true a false y viceversa. */}
            <button onClick={ ()=> setLogged(!logged) } style={ logged ? buttonLoggedStyles: buttonUnloggedStyles }>
                { logged ? 'Logout' : 'login'}
            </button>
        </div>
    );
}

export default GreetinsgStyled;
