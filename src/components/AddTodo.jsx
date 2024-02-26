import { useState, useRef } from "react";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState();
  // const [todoDate, setTodoDate] = useState();
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on : ${dueDate}`);
    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setTodoDate("");
  };

  return (
    <div class="container text-center">
      <form class="row kg-row" onSubmit={handleAddButtonClicked}>
        <div class="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date" ref={dueDateElement}/>
        </div>
        <div class="col-2">
          <button
            type="submit"
            class="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
