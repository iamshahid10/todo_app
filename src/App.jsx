import "./App.css"
import TodoItem2 from './TodoItem2'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItem1 from './components/TodoItem1'
function App() {
  let date = new Date();

  return (
    
      <center className="todo-container">
          <AppName></AppName>
          <h3>{date.toLocaleDateString()}</h3>
          <AddTodo></AddTodo>
          <div className="items-container">
          <TodoItem1></TodoItem1>
          <TodoItem2></TodoItem2>
          </div>

      </center>
      

  )
}

export default App
