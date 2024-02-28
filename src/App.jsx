import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // Creating a handler for input item and date

  const handleNewItem = (itemName, itemDueDate) => {
    // const newTodoItems = [
    //   ...todoItems,
    //   { name: itemName, dueDate: itemDueDate },
    // ];
    // setTodoItems(newTodoItems);

    // Functional updates: to avoid stale values during asynchronous updates

    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteClick = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  };

  const defaultTodoItems = [{ name: "Buy Ghee", dueDate: "Now" }];

  return (
    // <>  Fragments: dont use div as it gives no purpose other than to return
    <>
      <TodoItemsContext.Provider value={todoItems}>
        <center className="todo-container">
          <AppName />
          <AddTodo onNewItem={handleNewItem} />
          <WelcomeMessage/>
          <TodoItems
            onDeleteClick={handleDeleteClick}
          ></TodoItems>
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
