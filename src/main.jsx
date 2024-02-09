import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./style/reset.css";
import "./style/week4.css";
import Week4 from "./weeks/week4/week4";

// import "./style/week3.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Week4 />
  </StrictMode>
);
