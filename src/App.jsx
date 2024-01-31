import { useState } from "react";
import "./App.css"
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  let date = new Date();

  const [todoItems, setTodoItems] = useState([])

  const handleNewItem=(todoName, dueDate)=>{
      const newTodoItems = [
        ...todoItems,{name: todoName, dueDate: dueDate},
      ];
      setTodoItems(newTodoItems);

  }

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);

  };

  return (
  
      <center className="todo-container">
          <AppName appName="TODO APP" ></AppName>
          <h3 className="date">{date.toLocaleDateString()}</h3>
          <AddTodo onNewItem={handleNewItem} ></AddTodo>
          {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem} ></TodoItems>
      </center>
    

  )
}

export default App
