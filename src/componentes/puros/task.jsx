import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//modelos 
import { Task } from '../../models/task.class';
import { LEVELS } from "../../models/levels.enum";

//IMportamos la hoja de estilo de task
import '../../SCSS/task.scss';



const TaskComponent = ( { task, complete, deleTask } ) => {

    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Task: ${task.name} is going to unmount.-`)
        };
    }, [ task ]);

    /**
     * Funcion que comprueba en que level se encuentra la tarea
     */

    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.normal:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-primary">
                            { task.level }
                        </span>
                    </h6>
                )
                    
            case LEVELS.urgent:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-warning">
                            { task.level }
                        </span>
                    </h6>
                )
            
            case LEVELS.blocking:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-danger">
                            { task.level }
                        </span>
                    </h6>
                )
                
            default:
                break;
        } 
    }
    /**
     * 
     * @returns Returna el icono dependiendo si la tarea esta completada o no
     */
    function TaskIconComleted(){
        if(task.completed){
            return (<i onClick={ () => complete(task) } className=" bi bi-toggle-on task-action" style={ {color: 'green', fontSize: '25px'} }></i>)
        }else{
            return (<i onClick={ () => complete(task)} className= "bi bi-toggle-off task-action" style={ {color: 'grey', fontSize: '25px'} }></i>)
        }
    }
    
    return (
        
        <tr className={ task.completed ? 'fw-normal task-completed' : ' fw-normal task-pending' }>
            <th>
                <span className="ms-2"> { task.name }</span>
            </th>
            <td className='align-middle'>
                <span className="ms-2"> { task.descriptions }</span>
            </td>
            <td className='align-middle'>
                {/* Ejecuta la funcion que returna el icono dependiendo de el nivel de la tarea */}
                { taskLevelBadge() }
            </td>
            <td className='align-middle'>
                {/* Ejecuta la funcion que returna el icono que depende del completado */}
                { TaskIconComleted() }
                <i className="bi bi-trash task-action" style={ { color: 'tomato', fontSize: '30px'  } } onClick={ () => deleTask(task) }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    //Indicamos que lo que recibimos en el Task es una tarea
    task: PropTypes.instanceOf(Task),
    // Le decimos que la propr complete tiene que ser una funcion.
    complete: PropTypes.func.isRequired,
    deleTask: PropTypes.func.isRequired, 
};


export default TaskComponent;
