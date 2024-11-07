import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoContext);
  const [newContent, setNewContent] = useState("");
  const contentRef = useRef(null);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };

  const addTodo = () => {
    if (newContent === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(newContent);
    setNewContent("");
    contentRef.current.focus();
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={newContent}
        onKeyDown={onKeyDown}
        onChange={(e) => {
          setNewContent(e.target.value);
        }}
        placeholder="새로운 Todo..."
      />
      <button onClick={addTodo}>추가</button>
    </div>
  );
};

export default Editor;
