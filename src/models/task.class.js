import { LEVELS } from "./levels.enum";



export class Task {
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}



/* Hacemos un conjunto de datos que lo vamos a utilizar 
como props
La idea es que tengamos una lista de tareas y una tarea
es decir vamos a tener un componente contenedor que va a
tener todo el contenido de las tareas y luego vamos
a tener un componente que va a ser la tarea para que 
aparesca una ves dos veces y mas

Ahora mismo la idea es plantear los componentes e tarea
y las listas de las tares
*/