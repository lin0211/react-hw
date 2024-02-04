import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./style/reset.css";
import "./style/week3.css";
import Week3 from "./weeks/week3/week3";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Week3 />
  </StrictMode>
);
