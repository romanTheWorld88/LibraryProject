import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/books";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// app will show up as prop to Provider as 'children'
root.render(
  <Provider>
    <App />
  </Provider>
);
