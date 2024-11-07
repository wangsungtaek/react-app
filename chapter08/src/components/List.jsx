import "./List.css";
import { useState, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const List = () => {
  const { todos, onUpdate, onDelete } = useContext(TodoContext);
  const [searchValue, setSearchValue] = useState("");

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const getFilteredData = () => {
    if (searchValue === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const getFilteredTodo = getFilteredData();

  const { totalTodo, doneTodo, notTodo } = useMemo(() => {
    const totalTodo = todos.length;
    const doneTodo = todos.filter((todo) => todo.isDone).length;
    const notTodo = totalTodo - doneTodo;

    return {
      totalTodo,
      doneTodo,
      notTodo,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>total: {totalTodo}</div>
      <div>done: {doneTodo}</div>
      <div>notDone: {notTodo}</div>
      <input
        value={searchValue}
        onChange={onChange}
        placeholder="검색어를 입력하세요"
      />
      <div className="todoItemWrapper">
        {getFilteredTodo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
