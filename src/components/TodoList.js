import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { createTask, deleteTask, updateTask } from "../store/tasks";

function TodoList() {
  const todos = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    dispatch(createTask(todo));
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    dispatch(updateTask({ id: todoId, newValue }));
  };

  const removeTodo = (id) => dispatch(deleteTask({ id }));

  const completeTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    dispatch(
      updateTask({ id, newValue: { ...todo, isComplete: !todo.isComplete } })
    );
  };

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
