import React, { useState, useRef } from 'react';
import { Contacto } from './models/Contacto';
import ListaPuro from './ListaPuro';
import AddUser from './addUser';


const Lista = () => {   
    
    const contacto1 = new Contacto('Javier', 'Restrepo Toro', 'jarestrepot@uqvirtual.edu.co', false);
    const contacto2 = new Contacto('Valentina', 'Alzate Sanchez', 'valzate618@gmail.com', true);


    const [listaU, setLista] = useState([contacto1, contacto2]);

    function userState(persona){
        const indice = listaU.indexOf(persona);
        const temporalLista = [...listaU];
        
        temporalLista[indice].conectado = !temporalLista[indice].conectado;

        setLista(temporalLista);
    }

    function eliminarUser(eliminado){
        const indice = listaU.indexOf(eliminado);
        const temporalLista = [...listaU];
        //Eliminamos el usuario cliccado
        temporalLista.splice(indice,1);
        //cambiamos el estado del componente
        setLista(temporalLista);
    }

    function agregarUser(lista){
        // const indice = listaU.indexOf(lista);
        const temporalLista = [...listaU];

        temporalLista.push(lista);

        setLista(temporalLista);
    }

    return (
        <div>
            <div className="col-12">   
                <div className="card">
                {/* Card header  (title) */}
                    <div className="card-header p-3">
                        <h5 className='h1'>
                            Contactos:
                        </h5>
                    </div>

                {/* Card body (contenido) */}
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '500px', width: '150%'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Nombre|</th>
                                    <th scope="col">Apellidos|</th>
                                    <th scope="col">Email|</th>
                                    <th scope="col">Estado|</th>
                                    <th scope="col">Sessi&oacute;n</th>
                                    <th scope="col">Eliminar|</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* TODO: Iterar sobre una lista de tareas */}
                                {
                                    listaU.map( (lista, indice) =>{
                                        return(
                                            <ListaPuro
                                                key={indice}
                                                lista={lista}
                                                conectado={ userState }
                                                eliminarUser ={ eliminarUser }
                                                > 
                                            </ListaPuro>
                                        )
                                    })
                                }
                                {/* TODO: Aplicar un for/map para renderizar una lista de tareas */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <AddUser addUser={ agregarUser }></AddUser>
        </div>
    );
};



export default Lista;
