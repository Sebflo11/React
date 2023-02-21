import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingFuncion = (props) => {

    // Breve introducción a useState, crerar un estado privado para este componente de estilo funcion
    // const [variable, método para actualizarla] = useState(valor inicial)
    const [age, setage] = useState(32);

    const birthday = () => {
        // Este método se encarga de actualizar el State
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                    ¡Hola { props.name} desde componente funcional!
                </h1>
                <h2>
                    Tu edad es de: { age } {/*El state es privado e inmutable, no podemos cambiar el state sin una funcion especifica */}
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingFuncion.propTypes = {
    name: PropTypes.string
};


export default GreetingFuncion;
