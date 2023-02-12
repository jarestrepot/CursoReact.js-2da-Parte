/**
 * Crear nuevas tareas
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class'

const TaskForm = ({ add, length, cargando }) => {

    // Creamos las constantes a las cuales va a estar referenciado nuestro input.
    const nameRef = useRef('');
    const descriptionsRef = useRef('');
    const levelRef = useRef(LEVELS.normal);

    // Funcion para añadir tareas
    function addTask(e) {
        e.preventDefault();

        const newTask = new Task(
            nameRef.current.value, 
            descriptionsRef.current.value, 
            false,
            levelRef.current.value,
            );

            add(newTask);
    }
    //Estilos del formaulario
    const normalStyle = {
        color: 'rgb(31, 212, 221)',
        fontWeight: 'bold',
    }
    const urgenStyle = {
        color: 'rgb(225, 200, 13)',
        fontWeight: 'bold',
    }
    const blockingStyle = {
        color: 'rgb(220, 80, 11)',
        fontWeight: 'bold',
    }
    const selectBackgroundColor = {
        backgroundColor: 'rgb(0, 0, 0.2, 0.3)'
    }

    // const Formulario = ({ add, length, cargando })=>{
    //     return (
    //         // Cuando haga click en el button
    //         <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>
    //             <div className='form-outline flex-fill'>
    //                 <input ref={ nameRef } id='inputName'  type='text' className='form-control form-control-lg' required autoFocus placeholder='Name the task'/>
    //                 <input ref={ descriptionsRef } id='inputDescription'  type='text' className='form-control form-control-lg' required placeholder='Description'/>
    //                 <label htmlFor='selectLevel' className='sr-only h3'>
    //                     Prioridad
    //                 </label>
    //                 <select className='form-control form-control-lg' ref={ levelRef } defaultValue={ LEVELS.normal } id='selectLevel' style={ selectBackgroundColor }>
    //                     <option style={ normalStyle } value={ LEVELS.normal }>
    //                         Normal
    //                     </option>
    //                     <option style= { urgenStyle } value={ LEVELS.urgent }>
    //                         Urgente
    //                     </option>
    //                     <option style={ blockingStyle } value={ LEVELS.blocking }>
    //                         Bloqueado
    //                     </option>
    //                 </select>
    //                 <button type='submit' className='btn btn-primary btn-lg ms-2'>
    //                     { length > 0 ? 'Add new task' : 'Create your first tasks'}
    //                 </button>
    //             </div>
    //         </form>
    //     );
    // }

    // let formulario;


    return (
        // // Cuando haga click en el button
        <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={ nameRef } id='inputName'  type='text' className='form-control form-control-lg' required autoFocus placeholder='Name the task'/>
                <input ref={ descriptionsRef } id='inputDescription'  type='text' className='form-control form-control-lg' required placeholder='Description'/>
                <label htmlFor='selectLevel' className='sr-only h3'>
                    Prioridad
                </label>
                <select className='form-control form-control-lg' ref={ levelRef } defaultValue={ LEVELS.normal } id='selectLevel' style={ selectBackgroundColor }>
                    <option style={ normalStyle } value={ LEVELS.normal }>
                        Normal
                    </option>
                    <option style= { urgenStyle } value={ LEVELS.urgent }>
                        Urgente
                    </option>
                    <option style={ blockingStyle } value={ LEVELS.blocking }>
                        Bloqueado
                    </option>
                </select>
                <button type='submit' className='btn btn-primary btn-lg ms-2'>
                    { length > 0 ? 'Add new task' : 'Create your first tasks'}
                </button>
            </div>
        </form>
    );
}


TaskForm.protoType ={
    add: PropTypes.func.isRequired,
    lenght: PropTypes.number.isRequired,
}

export default TaskForm;
