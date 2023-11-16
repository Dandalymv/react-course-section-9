import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};


export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    dispatch({
      type: "add",
      payload: todo,
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
