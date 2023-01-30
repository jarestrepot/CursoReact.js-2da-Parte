// Componentes de clase rccp sniper de react
import React, { Component } from 'react';
//PropTypes que tipo estamos utilizando
import PropTypes from 'prop-types';


class Saludando extends Component {

    //props son propiedades HTML
    constructor(props) {
        super(props);
        //state es informacion privada del componente que sirve para gestionarse.
        this.state = {
            edad:25
        }
    }
    render() {
        return (
            <div>
                <h1>
                    !Hola {this.props.name} desde la clase componente
                </h1>
                <h2>
                    Tu edad es de: {this.state.edad}
                </h2>
                <p>
                    Lenguaje favorito: {this.props.lenguaje}
                </p>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }
    birthday = () => {
        //prevState estado previo
        //setState obtener el estado de la clase Saludando
        this.setState((prevState) =>(
            {
                edad: prevState.edad +1,
            }
        ))
    }
}


Saludando.propTypes = {
    //El nombre y el lenguaje puede ser de tipo string
    name: PropTypes.string,
    lenguaje: PropTypes.string,
    edad: PropTypes.number,
};

//Se exporta por defecto
export default Saludando;
