import { memo } from "react";
import "./Header.css";

const Header = () => {
  console.log("Header Renderd");
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// const MemoHeader = memo(Header);

//usememo 쓰면 렌더링 한번만 할 수 있음\
export default memo(Header);
