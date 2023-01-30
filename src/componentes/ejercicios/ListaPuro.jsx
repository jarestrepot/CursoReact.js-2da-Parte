import React from 'react'
import PropTypes from 'prop-types';
import { Contacto } from './models/Contacto';


function ListaPuro( {lista, conectado, eliminarUser} ) {


    function concetado(){
        if(lista.conectado){
            return (<i className="bi bi-circle-fill task-action" style={ {color: 'green', fontSize: '40px'} }></i> )

        }else{
            return (<i className= "bi bi-circle-fill task-action" style={ {color: 'grey', fontSize: '40px'} }></i> )
        }
    }

    function buttonConectado(){
        if(lista.conectado){
            return (<button onClick={ () => conectado(lista) } >Desconectar</button>)
        }else{
            return (<button onClick={ () => conectado(lista) }>Conectar</button>)
        }
    }

    return (
        <tr className="fw-normal">
        <th>
            <span className="ms-2"> { lista.nombre  }</span>
        </th>
        <td className='align-middle'>
            <span className="ms-2"> { lista.apellido  }</span>
        </td>
        <td className='align-middle'>
            {/* Ejecuta la funcion que returna el icono dependiendo de el nivel de la tarea */}
            { lista.email }
        </td>
        <td className='align-middle'>
            {/* Ejecuta la funcion que returna el icono que depende del completado */}
            { concetado() }
            
        </td>
        <td>
            { buttonConectado() }
        </td>
        <td>
            <i className="bi bi-trash task-action" style={ { color: 'tomato', fontSize: '30px'  } } onClick={ () => {
                const alerta = alert('Seguro quieres eliminar el usuario?');
                //Se puede mejorar con un modal.
                    if(!alerta){ 
                        eliminarUser(lista) 
                    }
                }
                
                }>
            </i>
        </td>
    </tr>
    
    )
}

ListaPuro.propTypes = {

    lista: PropTypes.instanceOf(Contacto),
    conectado: PropTypes.func.isRequired,
}

export default ListaPuro
