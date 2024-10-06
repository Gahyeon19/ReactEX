import { useContext } from 'react';
import {context} from '../const/Context'


const Button = () => {
  const theme = useContext(context);

  return (
    <>
      <button type="submit" style={{backgroundColor:theme.color}}>{theme.type}</button>
    </>
  )
}

export default Button