import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import "./App.css";
// import Home from "../router/Home";
// import Detail from "../router/Detail";
// import Info from "../router/Info";
import MovieHome from '../router/MovieHome';
import MovieDetail from '../router/MovieDetail';
// import ParamEx1 from '../router/Paramex1';
// import ParamEx2 from '../router/ParamEx2';

function App() {
  
  return (
    <>
      <BrowserRouter>
        {/* <Link className="link" to="/">Home</Link>
        <Link className="link" to="/detail">Detail</Link>
        <Link className="link" to="/info">Info</Link>
        <Link className="link" to="/param/1">Param</Link> */}
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          {/* <Route path="/detail" element={<Detail/>}/>  */}
          <Route path="/" element={<MovieHome/>}/>
          <Route path="/detailMovie/:id" element={<MovieDetail/>}/> 
          {/* <Route path="/info" element={<Info/>}/> 
          <Route path="/param/:id" element={<ParamEx1/>}/> 
          <Route path="/query" element={<ParamEx2/>}/>  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;