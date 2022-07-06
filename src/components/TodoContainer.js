import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleCheckboxChange = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const addTodo = (todoTitle) => {
    setTodos([...todos, { id: uuidv4(), title: todoTitle, completed: false }]);
  };

  const updateTodo = (title, todoId) => {
    setTodos(todos.map((todo) => {
      if (todo.id === todoId) {
        todo.title = title;
      }
      return todo;
    }));
  };

  return (
    <div className="container">
      <Header className="inner" />
      <InputTodo addTodoProps={addTodo} />
      <TodosList todos={todos} handleChangeProps={handleCheckboxChange} deleteTodoProps={deleteTodo} updateTodoProps={updateTodo} />
    </div>
  );
};

export default TodoContainer;
