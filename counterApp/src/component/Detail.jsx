import { useState } from "react";
import Search from "./Search";

function Detail({ todolist, onUpdate, onDelete }) {
  let [search, setSearch] = useState("");
  let changeSearchValue = (e) => setSearch(e.target.value);
  let getFilterdTodo = () => {
    if (search) {
      return todolist.filter((todo) => todo.content.includes(search));
    } else {
      return todolist;
    }
  };

  let filteredTodo = getFilterdTodo();

  return (
    <>
      <hr />
      <h3>Todos</h3>
      <Search search={search} changeSearchValue={changeSearchValue} />
      <ul>
        {filteredTodo.map((todo) => (
          <li>{todo.content}</li>
        ))}
      </ul>
    </>
  );
}

export default Detail;
