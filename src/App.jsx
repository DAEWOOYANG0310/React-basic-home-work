import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const valueHandler = (e) => {
    setValue(e.target.value);
  };
  const newTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: value,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };
  const delHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={newTodoHandler}>
        <input
          type="text"
          placeholder="할 일을 추가하세요"
          value={value}
          onChange={valueHandler}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => changeHandler(todo.id)}>
              {todo.done ? "취소" : "완료"}
            </button>
            <button onClick={() => delHandler(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
