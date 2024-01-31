import { useState } from "react";
import styles from "./AddTodo.module.css"
function AddTodo({onNewItem}){

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleOnChangeName=(event)=>{
    setTodoName(event.target.value);
  
}

const handleOnChangeDate=(event)=>{
  setDueDate(event.target.value);

}

const handleAddButtonClicked=(event)=>{
  event.preventDefault();
  onNewItem(todoName, dueDate);
  setDueDate("");
  setTodoName("");

}

    return( <div className="container text-center">
          <form onSubmit={handleAddButtonClicked} className="row kg-row">
            <div className="col-6">
              <input type="text" value={todoName} onChange={handleOnChangeName} placeholder="Enter Todo Here" />
            </div>
            <div className="col-4">
              <input type="date" value={dueDate} onChange={handleOnChangeDate} />
            </div>
            <div className="col-2">
            <button type="submit" className="btn btn-success kg-button">Add</button>
            </div>
          </form>
          </div>
          );

}
export default AddTodo;