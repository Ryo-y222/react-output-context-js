// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { TodoPage } from "./pages/todo.jsx";
// // import App from './App.jsx'
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <TodoPage />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { TodoPage } from "./pages/todo";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoPage />
  </React.StrictMode>
);
