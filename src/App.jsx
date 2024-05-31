import { useState } from "react";
import Input from "./Input";
import Todo from "./Todo";

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
        <Input value={value} onChange={valueHandler} />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onclick={changeHandler}
            onclick={delHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
