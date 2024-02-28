import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = ({ onDeleteClick }) => {
  const todoItems = useContext(TodoItemsContext);

  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
