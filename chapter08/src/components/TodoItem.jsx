import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onClick = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem" id={id}>
      <input
        readOnly
        type="checkbox"
        checked={isDone}
        onChange={() => {
          onUpdate(id);
        }}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClick}>삭제</button>
    </div>
  );
};

// export default memo(TodoItem, (prevProps, nextProps) => {
//   console.log(1);
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });
export default memo(TodoItem);
