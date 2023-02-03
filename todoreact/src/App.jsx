import './App.css'
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!input) {
      alert('Please enter a todo item');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: input,
      status: false
    };
    setTodos(oldTodos => [...oldTodos, item]);
    setInput('');
  }

  function deleteTodo(id) {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  }

  function doneTodo(id) {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const tmpTodos = [...todos];
    tmpTodos[todoIndex].status = true;
    setTodos(tmpTodos);
  }

  return (
    <div className="App">
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>submit</button>
      <hr />
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.status ? 'line-through' : 'none' }}
          >
            {todo.value}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
            <button onClick={() => doneTodo(todo.id)}>✔️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;