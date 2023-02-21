import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props); // Información que le vamos a pasar por atributo
        this.state = { // Es una información privada del componente que sirve para gestionarce o mostrar el contenido que tenga que mostrar o hacer una logica digamos propiedades de la clase
            age: 29,
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡Hola { this.props.name}!
                </h1>
                <h2>
                    Tu edad es de: { this.state.age } {/*El state es privado e inmutable, no podemos cambiar el state sin una funcion especifica */}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
                {
                    age: prevState.age + 1
                }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string, // Con esto no podemos pasarle otra cosa que no sea de tipo texto
};


export default Greeting;

/* 
Componenet es una clase que requiere de un metodos
que es render, este render deve devolver siempre un
return de parentecis y dentro la estructura de HTML

la estructura de un jsx combina contenido JavaScript y HTML,
con la particularidad que tenemos la capacidad que tenemos
de renderizar determinadas variables, etx dentro del proyecto
a traves de algunas anotaciones con llaves dentro del html
e incluso trabajar con renderizado condicionales, poder
hacer bucles dentro del proptio html

propTypes -> Son el contenido que yo le puedo pasar
de un componente desde un componenete de orden superior
Nos sirve para especificar "que pinta" o el tipo de dato
que estamos pasandole.
Los propTypes requieren de tipos
Son imprecindible en React

en jsx no podemos renderizar o devolver mas de un elemento
en el mismo momento digamos
<div>

</div>
<div>

</div>
Esto va a dar un error

Nosotro podemos tener un constructor nuestros componentes
de tipo class se diferencia preincipalmente con los de
tipo funcion porque los componentes de tipo calse tienen
contructores, propiedades de clases, metodos propios
mientras las funciones son funciones es programacion
funcional siempre tienen que devolver algo pero tambien podes
definirele propiedades o funcions propias funciones dentro
de funciones collback

Los componentes tienen un propio constructor y podemos
pasarle información, si yo quiero pasar en este caso
un hola sebastián como se lo paso desde el padre el
padre le va a pasar información
*/