import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomMessage.module.css";

const WelcomeMessage = () => {
  const todoItems = useContext(TodoItemsContext);
  return todoItems.length === 0 &&  <p className={styles.welcome}>No Tasks left. Enjoy Your Day.</p>;
};

export default WelcomeMessage;
