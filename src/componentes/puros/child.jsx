import React, { useRef } from 'react';

const Child = ( { name, send , update } ) => {

    const mensajeRef = useRef('');
    const nameRef = useRef('');

    function presButton(){
        const texto = mensajeRef.current.value;
        alert(`texto del input: ${texto}`);
    };
    function presButtonParams(text){
        alert(`Texto: ${text}`);
    }
    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={ {backgroundColor: 'cyan', padding: '5px'} }>
            <p onMouseOver={ ()=> console.log(' ON mouse Over ') }>
                Hola,  {name}
            </p>
            <button onClick={ () => console.log(' Boton 1 pulsado ') }>
                Boton 1
            </button>
            <button onClick={ presButton }>
                Boton 2
            </button>
            <button onClick={ () => presButtonParams('Hello')}>
                Boton 3
            </button>
            {/* El onFocus es el evento cuado esta encima del elemento,
            El onChange es el evento que se dispara cuando se cambia el elemento,
            El onCopy es el evento  */}
            <input placeholder="Envia un mensaje a tu padre" 
                onFocus={ ()=> console.log('Input Focus') } 
                onChange={ (e)=> console.log('Input changed', e.target.value) }
                onCopy={ ()=> console.log('Copiado el texto del input') }
                ref={ mensajeRef }
            />
            <button onClick={ ()=> send(mensajeRef.current.value) }>
                Enviar mensaje al padre
                {/* Se puede enviar lo que sea una variable, un objeto, etc.. */}
            </button>
            {/* Formulario */}
            <div style={ { marginTop: '50px'} }>
                <form onSubmit={ submitName }>
                    <input placeholder='New Name' ref={ nameRef }></input>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
