import React, { useState } from "react";

function TodoItem({ text, onToggle, onDelete, done }) {
  return (
    <li>
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {text}
      </span>
      <button onClick={onToggle}>✔</button>
      <button onClick={onDelete}>✖</button>
    </li>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([]); 
  const [text, setText] = useState("");   

  const addTodo = () => {
    if (text.trim() === "") return;
    setTodos([...todos, { text, done: false }]);
    setText("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Список дел</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите дело"
      />
      <button onClick={addTodo}>Добавить</button>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            done={todo.done}
            onToggle={() => toggleTodo(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
