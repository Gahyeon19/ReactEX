import { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  console.log("item rendered")

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

//arePropsequal 함수 구현
export default memo(TodoItem, (prev, curr) => {
  if (prev.id != curr.id) return false;
  if (prev.isDone != curr.isDone) return false;
  if (prev.content != curr.content) return false;
  if (prev.date != curr.date) return false;
  
  return true;
});
