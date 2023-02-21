import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting-saludo';
// import GreetingFuncion from './components/pure/greeting-funcion';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Sebastián"></Greeting> */}

        {/* Componente de ejemplo funcional */}
        {/* <GreetingFuncion name="Sebastián"></GreetingFuncion> */}

        {/* Componentes de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>
        <ContactListComponent></ContactListComponent>
      </header>
      
    </div>
  );
}

export default App;
