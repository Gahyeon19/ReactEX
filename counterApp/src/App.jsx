import { useState, useRef } from "react";
import "./App.css";
import Text from "./component/Text";
import SharedButton from "./component/SharedButton";

function App() {
  let [isLogin, setisLogin] = useState(false);
  let [msg, setMsg] = useState("로그인하세요");
  let login = (e) => {
    setisLogin((cur) => !cur);
    if (isLogin) {
      setMsg("로그인되었습니다.");
    } else {
      setMsg("로그인하세요");
    }
  };

  return (
    <>
      <Text text={msg} />
      <SharedButton
        text={isLogin ? "Login" : "Logout"}
        func={login}
        color={isLogin ? "gray" : "orange"}
        textcolor={isLogin ? "white" : "black"}
      />
      {/* {isLogin ? <CondComponent login={login} /> : null}
      {isLogin ? <h1>참</h1> : <h1>거짓</h1>} */}
    </>
  );
}

export default App;
