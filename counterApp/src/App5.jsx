import { useState, useEffect } from 'react'
import './App.css'
import NewButton from './component/NewButton'
import Viewer from './component/Viewer'
import Input from './component/input'

function App() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("");
  const changeCount = () => setCount(count + 1);
  const changeName = (e) => setName(e.target.value);

  console.log("renderd !!");
  console.log(count);
  console.log(name);

  useEffect(() => console.log("mount 되었습니다."), []);
  useEffect(() => console.log("count가 변경되었습니다."), [count]);
  useEffect(() => console.log("name이 변경되었습니다."), [name]);
  
  return (
    <>
      <Viewer count={count} />
      <NewButton text="click" func={changeCount}/>
      <br /><br /><br />
      <Input name={name} func={changeName}/>
    </>
  )
}

export default App
