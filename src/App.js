import React from "react";
import "./styles.css";
import ContextDropdown from "./context-drop";

export default function App() {
  return (
    <div className="App">
      <div id="one">one</div>
      <ContextDropdown targetElement="#one" />
      <div id="two">two</div>
      <ContextDropdown targetElement="#two" />
      <div id="three">three</div>
      <ContextDropdown targetElement="#three" />
    </div>
  );
}
