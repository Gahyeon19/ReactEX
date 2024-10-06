import { useState, useReducer } from 'react'
import { ACTION_TYPE, reducer } from './functions/changeCount'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);

  //dispatch => reducer에게 일을 시키는 함수
  const [rCount, dispatch] = useReducer(reducer, 0);  //초기값 0
  const up = () => {
    dispatch({type:ACTION_TYPE.up, payload:1});
  }
  const down = () => {
    dispatch({type:ACTION_TYPE.down, payload:1});
  }

  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  }
  

  return (
    <>
      <h1>New Counter using Reducer</h1>
      <input type="text" value={name} onChange={onChange}/>
      <hr />
      <p>{rCount}</p>
      <button onClick={up}>+ 1</button>
      <button onClick={down}>- 1</button>
    </>
  )
}

export default App
