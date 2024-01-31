import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css"


function TodoItems({todoItems, handleDeleteItem}){
    return(
        <div className={styles.itemsContainer}>
        {todoItems.map((item, i)=>(
             <TodoItem key={i} todoname={item.name} tododate={item.dueDate} handleDeleteItem={handleDeleteItem} ></TodoItem>
        ))}
    
        </div>
    );
}

export default TodoItems; 