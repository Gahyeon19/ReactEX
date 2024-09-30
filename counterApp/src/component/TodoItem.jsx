function TodoItem(content, changeTodo, onCreate) {
  return (
    <>
      <form action="">
        <input type="text" value={content} placeholder="할 일을 입력하세요" onChange={changeTodo}/>
        <button onClick={onCreate}>Add</button>
      </form>
    </>
  )
}

export default TodoItem