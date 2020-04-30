import React from "react";
import Calendar from "react-calendar";
import "./App.css";
import ImageContainer from "./components/ImageContainer";
import ImageInfo from "./components/ImageInfo";

function App() {
  return (
    <div className="App">
      <div className="Calendar">
        <p>Choose A Date</p>
        <Calendar />
      </div>
      <ImageContainer />
      <ImageInfo />
    </div>
  );
}

export default App;
