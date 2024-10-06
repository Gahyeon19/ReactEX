import Button from './Button'
import {context} from '../const/Context'
import { useContext } from 'react';

const Form = () => {
  const theme = useContext(context);
  console.log(theme);
  return (
    <>
      <Button />
      <Button />
    </>
  )
  
}

export default Form