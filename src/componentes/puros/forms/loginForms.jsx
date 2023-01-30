/**
 * Componente que va contener un formulario para autenticacion de usuarios.
 */
import React, { useState }from 'react';

const LoginForms = () => {

    const initialCredenciales = [
        {
            user: '',
            password: '',
        }
    ];

    //Para actulizar y tratar los datos.
    const [credentials, setCredentials] = useState(initialCredenciales);


    return (
        <div>
            
        </div>
    );
}

export default LoginForms;
