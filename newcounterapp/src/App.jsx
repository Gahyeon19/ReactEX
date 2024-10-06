import { useState, useContext, createContext } from 'react'
import Form from './components/Form'
import {context} from './const/Context'
import './App.css'


function App() {
 
  const theme = useContext(context);
  theme.type = "display";
  theme.color = "pink";

  const [type, setType] = useState("");
  const onChange = (e) => {
    setType(e.target.value);
  }

  const [color, setColor] = useState("gray");
  const onColor = (e) => {
    setColor(e.target.value);
  }
  return (
    <>
      <h1>useContext 예제</h1>
      <context.Provider value={theme}><Form/></context.Provider>
      {/* <Form onChange={onChange} type={type} onColor={onColor} color={color} /> */}
    </>
  )
}

export default App
