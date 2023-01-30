import React, { useRef }from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './models/Contacto';


const AddUser = ( { addUser } ) => {

    const nombreRef = useRef('');
    const apellidosRef = useRef('');
    const emailRef = useRef('');

    function addUserNew(e){
        e.preventDefault();
        const newUser = new Contacto(
            nombreRef.current.value,
            apellidosRef.current.value,
            emailRef.current.value,
            true,
        );

        addUser(newUser);
    }


    return (
        <form onSubmit={ addUserNew } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={ nombreRef } id='inputName'  type='text' className='form-control form-control-lg' required autoFocus placeholder='Your name'/>
                <input  ref={ apellidosRef } id='inputApellidos'  type='text' className='form-control form-control-lg' required placeholder='Your Last name'/>
                <input ref={ emailRef } id='inputEmail' type='email' className='form-control form-control-lg' required placeholder='Your Email'></input>
            </div>
            <button type='submit' className='btn btn-primary btn-lg ms-2'>ADD USER</button>
        </form>
    );
};


AddUser.propTypes = {
    addUser: PropTypes.func.isRequired,
};


export default AddUser;
