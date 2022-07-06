import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input className={styles.checkbox} type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps(props.todo.id)} />
        <span style={props.todo.completed ? completedStyle : null}>
          {props.todo.title}
        </span>
        <button onClick={() => props.deleteTodoProps(props.todo.id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
      </div>
      <input type="text" style={editMode} className={styles.textInput} value={props.todo.title} onChange={(e) => props.updateTodoProps(e.target.value, props.todo.id)} onKeyDown={handleUpdatedDone} />
    </li>
  );
};

export default TodoItem;
