// import { useState } from 'react'
import './App.css'
import ShareButton from './component/ShareButton'

function App() {
  let handler = () => {
    console.log("클릭되었습니다.");
  }
  return (
    <>
      <ShareButton text = "Save" color = "navy" textcolor = "white" func={handler}/>
      <ShareButton text = "Confirm" color = "orange" textcolor = "black" func={handler}/>
    </>
  )
}

export default App
