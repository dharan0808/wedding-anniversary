import React from "react";
import ReactDOM from "react-dom/client";
import BirthdayCard from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BirthdayCard />
  </React.StrictMode>
);
