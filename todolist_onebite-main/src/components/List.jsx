import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  const {totalCnt, isDoneCnt, notDoneCnt} = useMemo(() => {
    console.log("expensive calculate")
    const totalCnt = todos.length;
    const isDoneCnt = todos.filter(todo => {todo.isDone}).length;
    const notDoneCnt = totalCnt - isDoneCnt;

    return {
      totalCnt,
      isDoneCnt,
      notDoneCnt
    }
  }, [todos]);    //todos에 변동이 있을 때만 계산되도록

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>{totalCnt}</div>
        <div>{isDoneCnt}</div>
        <div>{notDoneCnt}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
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
