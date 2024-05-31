import React from "react";

const Todo = ({ todo, changeHandler, delHandler }) => {
  return (
    <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => changeHandler(todo.id)}>
        {todo.done ? "취소" : "완료"}
      </button>
      <button onClick={() => delHandler(todo.id)}>삭제</button>
    </li>
  );
};

export default Todo;
