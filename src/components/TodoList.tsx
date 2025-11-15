import { useState } from "react";

type Todo = {
  text: string;
  done: boolean;
};

function TodoItem(props: {
  text: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
}) {
  return (
    <li>
      <span
        style={{
          textDecoration: props.done ? "line-through" : "none",
        }}
      >
        {props.text}
      </span>

      <button onClick={props.onToggle}>✔</button>
      <button onClick={props.onDelete}>✖</button>
    </li>
  );
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState("");


  function addTodo() {
    if (value.trim() === "") return;

    const newTodo: Todo = {
      text: value,
      done: false,
    };

    const newTodos: Todo[] = [];
    for (let i = 0; i < todos.length; i++) {
      newTodos.push(todos[i]);
    }
    newTodos.push(newTodo);

    setTodos(newTodos);
    setValue("");
  }

  function toggleTodo(index: number) {
    const newTodos: Todo[] = [];
    for (let i = 0; i < todos.length; i++) {
      const todo = { ...todos[i] };
      if (i === index) {
        todo.done = !todo.done;
      }
      newTodos.push(todo);
    }
    setTodos(newTodos);
  }

  function deleteTodo(index: number) {
    const newTodos: Todo[] = [];

    for (let i = 0; i < todos.length; i++) {
      if (i !== index) {
        newTodos.push(todos[i]);
      }
    }

    setTodos(newTodos);
  }

  return (
    <div>
      <h2>Список дел</h2>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
