import React, { useState } from 'react';
import './TodoList.css';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const [editableId, setEditableId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (todo) => {
    setEditableId(todo._id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (editText.trim()) {
      updateTodo(id, { text: editText });
      setEditableId(null);
    }
  };

  return (
    <div className="todo-list">
      <h3>Todo Items</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {editableId === todo._id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(todo._id)}>Save</button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button onClick={() => handleEdit(todo)}>Edit</button>
              </>
            )}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
