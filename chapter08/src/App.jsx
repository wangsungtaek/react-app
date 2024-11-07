import "./App.css";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
} from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockTodos = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "청소하기",
    date: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.updateId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.deleteId);
  }
};

export const TodoContext = createContext();

function App() {
  // const [todos, setTodo] = useState(mockTodos);
  const [todos, dispatch] = useReducer(reducer, mockTodos);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((updateId) => {
    dispatch({
      type: "UPDATE",
      updateId: updateId,
    });
  }, []);

  const onDelete = useCallback((deleteId) => {
    dispatch({
      type: "DELETE",
      deleteId: deleteId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
