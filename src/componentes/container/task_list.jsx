import React, { useState, useEffect } from 'react';
//Importamos la clase Task y la LEVELS
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../puros/task';
import '../../SCSS/task.scss';
import TaskForm from '../puros/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Primera tarea', 'Descripcion 1', true , LEVELS.normal);
    const defaultTask2 = new Task('Segunda tarea', 'Descripcion 2', false , LEVELS.urgent);
    const defaultTask3 = new Task('Tercera tarea', 'Descripcion 3', false , LEVELS.blocking);

    //Estado del componente
    const [tareas, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [cargando, setCargando] = useState(true);


    //Control del ciclo de vida del componente

    useEffect(() => {
        console.log('Tasks State has been modified');
        setTimeout(() => {
            setCargando(false);
        }, 2500);
        return () => {
            console.log('TasksList component is going to unmount...');
        };
    }, [tareas]);

    function completeTask(task){
        console.log('Complete this task', task);
        const index = tareas.indexOf(task);
        const tempTask = [...tareas];
        //Indicamos que cambie la propiedad completed de la clase tarea seleccionada. de true a false y viceversa
        tempTask[index].completed = !tempTask[index].completed;
        // Actulizamos el estado del componente con setTask, al actulizar el estado del componente actualiza la iteracion del map y 
        // a su vez actuliza la tarea.
        setTasks(tempTask);
    }

    function deleteTask(task){
        console.log('Delete this task', task);
        const index = tareas.indexOf(task);
        const tempTask = [...tareas];
        //Busca la tarea por su indice y elimina esa tarea
        tempTask.splice(index, 1);
        //Cambiamos el estado del componente
        setTasks(tempTask);
    }

    function addTask(task){
        console.log('add this task', task);
        const index = tareas.indexOf(task);
        const tempTask = [...tareas];
        //Añadimos la tarea
        tempTask.push(task);
        //Cambiamos el estado del componente
        setTasks(tempTask);
    }
    //Componente tabla
    const Table = () =>{
        return (
            <table>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO: Iterar sobre una lista de tareas */}
                    { tareas.map((task, index) =>{
                        return(
                            <TaskComponent 
                                key={ index } 
                                task={ task } 
                                complete={ completeTask } 
                                deleTask={ deleteTask }>
                            </TaskComponent>
                        )
                    })}
                    {/* TODO: Aplicar un for/map para renderizar una lista de tareas */}
                </tbody>
            </table>
        )
    }
    //Fin componente tabla

    let taskTable;

    // taskTable.lengh > 0 ? <Table></Table>: <h3>No tienes tareas pendientes</h3>
    if(tareas.length > 0){ 
        taskTable = <Table></Table>
    }else{
        taskTable = (
            <div>
                <h3 className=" font-monospace">No tienes tareas pendientes</h3>
                <p className=" bi-clock-history">Por favor crea una nueva tarea</p>
            </div>
        )
    }

    return (
        <div className=' container-fluid'>
            <div className="col-12">   
                <div className="card">
                {/* Card header  (title) */}
                    <div className="card-header p-3">
                        <h5>
                            Your Task:
                        </h5>
                    </div>
                    {/* Card body (contenido) */}
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '500px'}}>
                        {/* Si la aplicación esta cargando que dura 2 segundos en pasar a false */}
                        { cargando ? ( <span className="loading"><p>LOADING..</p></span> )  : taskTable }
                        {/* { <Table></Table> } */}
                    </div>
                </div>
            </div>
            {/* Mientras la tabla cargue no se podra añadir nuevas tareas */}
            { cargando ? (<span className="loading" style={{  width: '100%' }}><p>LOADING..</p></span>) : <TaskForm add={ addTask } length={ tareas.length }></TaskForm> }
        </div>
    );
};


export default TaskListComponent;
