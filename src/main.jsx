import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Curso} from './Curso'
import "./styles.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Curso></Curso>
  </StrictMode>,
)
