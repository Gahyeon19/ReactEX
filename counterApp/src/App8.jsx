import { useState } from "react";
import "./App.css";
import Form1 from "./component/Form1";
import Form2 from "./component/Form2";
import Form3 from "./component/Form3";

  // 점수 수정 기능
function App() {
  // let student = {
  //   id : 1,
  //   name : "Hong-Gildong",
  //   score: 90
  // }

  let [student, setStudent] = useState({
    id : 1,
    name : "Hong-Gildong",
    score : 90,
    age : 20,
    school : "kosta"
  })
  
  let changeScore = (e) => {
    setStudent({...student, score:e.target.value})
  }

  let addAge = (e) => {
    setStudent({...student, age:e.target.value})
  }

  let changeValue = (e) => {
    let {value, name} = e.target;
    console.log(value);
    console.log(name);
    setStudent({...student, [name]:value})
  }


  return (
    <>
      {/* <input type="text" placeholder="점수를 입력하세요"/> <button></button>
      <Component3 num={100} str="student" student={student}/> */}
      <Form1 student={student} changeScore={changeScore}/><br />
      <Form2 student={student} changeScore={changeScore} addAge={addAge}/>
      <Form3 student={student} changeValue={changeValue}/>
    </>
  );
}

export default App;
