import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './models/Contacto';
import ComponenteB from './componenteB';


const ComponenA = ( {contacto} ) => {
    return (
        <div>
            <h1>
                Nombre completo: <strong>{ contacto.nombre } { contacto.apellido }</strong>
            </h1>
            <p>Email: <strong>{ contacto.email }</strong></p>
            <ComponenteB estado={ true }></ComponenteB>
        </div>
    );
};


ComponenA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};


export default ComponenA;
