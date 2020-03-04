import React from "react";
import "./App.css";
import axios from "axios";


  
function App() {
  
  axios.get("https://api.nasa.gov/planetary/apod?api_key=KIgeE6B1p5RrbH06R2C7yYeHZFGIuCFKPtbpXLrQ&date=2012-03-14")
  .then (response => {
    console.log(response)

  
  })
  .catch (error => {
    return "There was an error retrieving the data"
  })

  return (
  
  
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
     
    </div>
  );
}

export default App;
