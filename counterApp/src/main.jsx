import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './AppTodoList.jsx'
import './index.css'
import AppTodoList from './AppTodoList.jsx'

createRoot(document.getElementById('root')).render(
  <AppTodoList />
)
