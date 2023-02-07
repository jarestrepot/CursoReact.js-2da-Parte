import React, { useState } from 'react';


//Login / Logout / buttons

let red = 10;
let green = 200;
let blue = 150;
//? Estilo para el usuario que esta logeado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold',
}
//? Estilo para el usuario que no esta logeado

const unLoggedStyle = {
    backgroundColor: 'tomato',
    color: 'white' ,
    fontWeight: 'bold',

}

const LoginButton = ( { loginAction, propStyle } ) =>{
    return (
        <button style={ propStyle } onClick={ loginAction }>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) =>{
    return (
        <button style={ propStyle } onClick={ logoutAction }>Logout</button>
    )
}

// ? (Expresión true) && expresion => se renderiza la expresion
// ? (Expresión false) && expresion => no se renderiza la expresion

const OptionalRender = () => {

    const [acceso, setAcceso] = useState(false);

    // const updateAcces = () => {
    //     setAcceso (!acceso);
    // }
    const [Nmessage, setNMessage] = useState(0);

    const loginAction = () => {
        setAcceso(true);
    }
    const logoutAction = () => {
        setAcceso(false);
    }

    let optionalButton;

    if(acceso) {
        optionalButton = <LogoutButton logoutAction={ logoutAction } propStyle={ unLoggedStyle }></LogoutButton>
    }
    else{
        optionalButton = <LoginButton loginAction={ loginAction } propStyle={ loggedStyle }></LoginButton>
    }

    let resetNmessage = () => {
        setNMessage(Nmessage -1);
    }
    /**
     * Unread messages
     */

    let addMessage = () => {
        //Numero de mensajes
        setNMessage(Nmessage +1 ); 
    }
   
    return (
        <div>
            {/* Optional Button */}
            { optionalButton }
            {/* N Mesagges unread */}
            {/* Si tiene mensajes sin leer se renderiza esto */}
            {/* { Nmessage > 0 && Nmessage === 1 && <p>You have {Nmessage} new message... </p>} */}
            {/* { Nmessage > 1 && <p>You have {Nmessage} new messages... </p>} */}
            {/* Si no tiene mensajes */}
            {/* { Nmessage === 0 && <p>There are no new menssages</p>} */}

            {/* Operador ternario */}
            {/* Solo si el usuaurio esta logeado se mostraran los mensajes pendientes */}
            {acceso ? (
                    <div>
                            {Nmessage > 0 ?
                            <p>You have { Nmessage } new message{ Nmessage > 1 ? 's': null }... </p>:
                            <p>There are no new menssages</p>}
                        <button onClick={ addMessage }>Add new message</button>
                    </div>
                    ) 
            :null}
            
            
        </div>
    );
}

export default OptionalRender;
