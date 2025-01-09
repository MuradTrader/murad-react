import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

const AppLayuot = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayuot />);
