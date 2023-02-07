import logo from './logo.svg';
import './App.css';
// import './SCSS/app.scss';
// importando el componente saludando
import Saludando from './componentes/puros/saludando';
import FuncionSaludando from './componentes/puros/funcionSaludando';
import TaskListComponent from './componentes/container/task_list';
import ComponenA from './componentes/ejercicios/componenA';
import Ejemplo from './hooks/Ejemplo';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConTexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import AllCyclesHooks from './hooks/lifeCycle/AllCycles';
import GreetinsgStyled from './componentes/puros/greetinsgStyled';
import ClockClase from './componentes/ejercicios/ejemploClaseClock';
import ClockFuncion from './componentes/ejercicios/clock'
import Father from './componentes/container/father';
import Lista  from './componentes/ejercicios/Lista';
import OptionalRender from './componentes/puros/optionalRender';
import ColorBox from './componentes/ejercicios/Cuadrado';

function App() {

  // const contacto ={
  //   nombre: 'Javier',
  //   apellido: 'Restrepo Toro',
  //   email: 'jarestrepot@uqvirtual.edu.co',
  //   conectado: false,
  // }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente Clase propio saludando.jsx */}
        {/* <Saludando name="Javier" lenguaje="JavaScript"></Saludando> */}

        {/* Componente Funcional */}
        {/* <FuncionSaludando name="Javier" lenguaje="JavaScript"></FuncionSaludando> */}

        {/* Ejercicios */}
        {/* <ComponenA contacto={contacto}></ComponenA> */}

        {/* Ejemplos de uso de HOOKs */}
        {/* <Ejemplo></Ejemplo> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConTexto></MiComponenteConTexto> */}

        {/* Todo lo que esta aqui dentro, es tratado como props.children */}
        {/* <Ejemplo4 nombre="Javier">
          <h3>
            contenido del props.children
          </h3>
        </Ejemplo4> */}

        {/* Ejemplo de los Hooks */}
        {/* <AllCyclesHooks></AllCyclesHooks> */}

        {/* Ejemplo de estilos en constantes, dependiendo del estado del componente cambiar su estilo */}
        {/* <GreetinsgStyled name="Javier"></GreetinsgStyled> */}

        {/* Ejemplo de la clase */}
        {/* <ClockClase></ClockClase> */}

        {/* Ejemplo de la funcion */}
        {/* <ClockFuncion></ClockFuncion> */}
      {/* </header> */}
      
      {/* Componente de listado de tareas */}
      {/* <TaskListComponent></TaskListComponent> */}

      {/* Gestion de eventos de hijo a padre */}
      {/* <Father></Father> */}

      {/* Ejercicio de Lista contacto */}
      {/* <Lista></Lista> */}

      {/* Ejemplos de renderizados condicional */}
      {/* <OptionalRender></OptionalRender> */}

      <ColorBox></ColorBox>
    </div>
  );
}

export default App;
