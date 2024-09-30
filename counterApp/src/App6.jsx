import { useState, useRef } from "react";
import "./App.css";
import Header from "./component/Header";
// import Func3, {Func1, Func2} from './component/Components';
import ComponentObj from "./component/ComponentsObj";
import TodoForm from "./component/TodoForm";


function App() {
  let id = useRef(0);
  let localid = 0;
  let [todo, setTodo] = useState("");
  let [todolist, setTodolist] = useState([]);
  const changeTodo = (e) => setTodo(e.target.value);
  const addTodolist = (e) => {
    e.preventDefault();
    if (!todo) {
      //if todo is null
      return;
    }
    setTodolist((arr) => [...arr, todo]);
    id.current = id.current + 1;
    localid = localid + 1;
    setTodo("");
    console.log("함수 내부 ==> " + todolist);
  };
  console.log("함수 외부 ==>" + todolist);

  // const deleteTodo = (targetId) => {
  //   setTodo(todolist.filter((it) => it.id !== targetId));
  // };


  return (
    <>
      {/* <Func1 />
      <Func2 />
      <Func3 /> */}
      <ComponentObj />
      <Header />
      <TodoForm number = {200} str="Hello" bool={true} todo={todo} changeTodo={changeTodo} addTodolist={addTodolist} todolist={todolist} deleteTodo/>
      
    </>
  );
}

export default App;
