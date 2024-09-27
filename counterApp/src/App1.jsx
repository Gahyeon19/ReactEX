import { useState } from 'react'
import './App.css'
import Button from '.component/Button'
import Viewer from './component/Viewer'

function App() {
  const [count, setCount] = useState(0)
  const handler = (num) => {
    setCount(count + num);
  }

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <Viewer count={count} />
        <Button text = "-1" countUpnDown={() => handler(-1)}/>
        <Button text = "-10"  countUpnDown={() => handler(-10)}/>
        <Button text = "-100"  countUpnDown={() => handler(-100)}/>
        <Button text = "+100"  countUpnDown={() => handler(+100)}/>
        <Button text = "+10"  countUpnDown={() => handler(+10)}/>
        <Button text = "+1"  countUpnDown={() => handler(+1)}/>
      </div>
      
    </>
  )
}

export default App
