// import './App.css';
import uuid from 'uuid';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';


const App = () => {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;