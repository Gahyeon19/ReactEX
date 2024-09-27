import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import TodoEditor from './component/TodoEditor'
// p.290 ~
function App() {

  return (
    <>
      <div className="App">
        <Header />
        <TodoEditor />
        <div>Todo List</div>
      </div>
    </>
  )
}

export default App
