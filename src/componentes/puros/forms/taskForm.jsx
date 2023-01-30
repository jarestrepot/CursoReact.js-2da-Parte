/**
 * Crear nuevas tareas
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class'

const TaskForm = ({ add }) => {

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

    return (
        // Cuando haga click en el button
        <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={ nameRef } id='inputName'  type='text' className='form-control form-control-lg' required autoFocus placeholder='Name the task'/>
                <input ref={ descriptionsRef } id='inputDescription'  type='text' className='form-control form-control-lg' required placeholder='Description'/>
                <label htmlFor='selectLevel' className='sr-only '>
                    Prioridad
                </label>
                <select ref={ levelRef } defaultValue={ LEVELS.normal } id='selectLevel'>
                    <option value={ LEVELS.normal }>
                        Normal
                    </option>
                    <option value={ LEVELS.urgent }>
                        Urgente
                    </option>
                    <option value={ LEVELS.blocking }>
                        Bloqueado
                    </option>
                </select>
            </div>
            <button type='submit' className='btn btn-primary btn-lg ms-2'>ADD TASK</button>
        </form>
    );
}

TaskForm.protoType ={
    add: PropTypes.func.isRequired,
}

export default TaskForm;
