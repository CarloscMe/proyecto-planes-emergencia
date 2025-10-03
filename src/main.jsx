import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Curso } from "./Curso";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Curso></Curso>
      <App />
    </StrictMode>
  </BrowserRouter>,
);
