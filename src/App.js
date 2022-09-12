import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import RestroName from "./components/RestroName";
import RestroNav from "./components/RestroNav";

function App() {

  return (
    <div className="App">
      <RestroName />
      <RestroNav />
    </div>
  );
}

export default App;
