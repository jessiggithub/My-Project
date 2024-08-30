import './App.css';
import toDoLogo from './imagenes/todo-logo.png';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="to-do-list">
      <div className='to-do-logo-container'>
        <img src={toDoLogo} className="to-do-logo" alt='' />
    </div>
    <div className='principal-list'>
      <h1>Check List</h1>
      <ToDoList />
      </div>
    </div>
  );
}

export default App;
