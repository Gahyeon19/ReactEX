import { useState, useRef } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoItem from "./component/TodoItem";
import Detail from "./component/Detail";
import Search from "./component/Search";


/**
 * state
 *   1. App - todo 객체 (id, isDone, content, date)
 *        : id 값은 useRef 를 이용하여 랜더와 관계없이 계속 증가하는 값 유지
 *          isDone은 true/false로 checkBox 클릭시 값이 토글됨
 *   2. App - todolist 배열
 *        : 추가 버튼을 누르면 기존 배열의 맨 앞에 새로운 할 일 객체를 추가
 *   3. Detail - Search Value
 *        : todoList 증에서 검색키워드에 해당되는 내용만 찾고자 할 때 사용
 * 
 * function :
 *   onCreate : todoItem으로 props 전달
 *   onUpdate : Detail로 props 전달 ==> TodoList로 props 전달
 *   onDelete : Detail로 props 전달 ==> Deatil에서 TodoList로 props 전달
 *   onSearch : SearchBar에서 입력받는 값으로 todolist 배열에 일치하는 내용이 있는지 검색해서 
 *             해당되는 배열만 화면에 보여지게 함.
 * 
 * 배열 : map(update 할 때), filter(delete 할 때), include(search 할 때)
 * 
 * component(props)
 *  1. Header
 *  2. TodoItem
 *  3. Detail
 *    3-1. SearchBar
 *    3-2. TodoList
 * 
 */

function AppTodoList() {
  let count = useRef(0);
  let [todo, setTodo] = useState({
    id : 0,
    isDone : false,
    content : "",
    date : new Date().toLocaleDateString
  })
  let [todolist, setTodolist] = useState([]);

  const changeTodo = (e) => setTodo({...todo, content:e.target.value});
  let onCreate = (content) => {
    //todo state를 todolist state의 맨 앞에 추가
    //추가 버튼을 누르면 기존 배열의 맨 앞에 새로운 할 일 객체를 추가
    //id 값은 useRef를 이용하여 랜더와 관계 없이 계속 증가하는 값 유지
    const newItem = {
      id : count.current++,
      isDone : false,
      content,
      date : new Date().toLocaleDateString
    }

    setTodolist([newItem, ...todolist]);
  }
  console.log(todo);

  const onUpdate = (updateId) => {
    //todo 객체의 id 값이 수정하려고 하는 아이템의 id와 같은 경우에
    //isDone을 true/false로 (checkbox 클릭시) 토글시킴
    setTodolist(todolist.map(todo => todo.id == updateId ? {...todo, isDone : !todo.isDone} : todo));

  }

  const onDelete = (deleteId) => {
    //todolist 배열 중에서 todo 객체의 id값이 삭제하려고 하는 아이템의 id와 다른 것만 걸러냄
    setTodolist(todolist.filter(todo => todo.id == deleteId));

  }


  return (
    <>
      <Header/>
      <TodoItem content={todo.content} changeTodo={changeTodo} onCreate={onCreate}/>
      <Detail todolist={todolist} onUpdate={onUpdate} onDelete={onDelete}/>
    </>
  );
}

export default AppTodoList;
