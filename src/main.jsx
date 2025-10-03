<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Curso} from './Curso'
import "./styles.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Curso></Curso>
  </StrictMode>,
)
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
>>>>>>> f79519f (fase 1 de prueba del localStorage en el proyecto)
