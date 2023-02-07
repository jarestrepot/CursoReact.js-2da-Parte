import React, { useState } from "react";

//Clase del color rgba
const initialColor = { r: 0, g: 0, b: 0 };

const ColorBox = () => {
    // Estado del componente color con el valor de la clase del rgba
    const [color, setColor] = useState(initialColor);
    /**
     * Estado de intervalo de colores del componente
     */
    const [intervalId, setIntervalId] = useState(null);

    const changeColor = () => {
        //Cambio de estado del componente color.
        setColor({
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256)
        });
    };

    const handleMouseEnter = () => {
        // Que cambie de color cada 0.7 segundos.
        const id = setInterval(changeColor, 700);
        // cambiamos el estado del componente de null a id que nos genera
        // un nuevo color cada 0.7 segundos.
        setIntervalId(id);
    };

    const handleMouseLeave = () => {
        //Cuando salimos de la caja vamos a parar el intervalo,
        // el color que genere esto quedara en el estado del componente y
        //parara el setInterval.
        clearInterval(intervalId);
    };

    const handleDoubleClick = () => {
        /**
         * Cuando damos doble click sobre la caja parar dara fin 
         * al setInterval sobre el color clicado
         */
        clearInterval(intervalId);
    };

    const style = {
        width: "255px",
        height: "255px",
        backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`
    };

    return (
        <div
            style={style}
            //Encima del cuadro
            onMouseOver={ handleMouseEnter }
            //Cuando sale del cuadro
            onMouseLeave={ handleMouseLeave }
            //Cuando le da doble click
            onDoubleClick={ handleDoubleClick }
        />
    );
};

export default ColorBox;




