import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
  return (
    <>
      <h2>Home.jsx</h2>
      <Link classname="link" to="/param/1">
        path param 전송
      </Link>
      <Link classname="link" to="/query?id=1&use_image=true">
        queryString 전달
      </Link>
    </>
  )
}

export default Home