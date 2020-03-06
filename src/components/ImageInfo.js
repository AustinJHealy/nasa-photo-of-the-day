import React, { useState, useEffect } from "react";
import axios from "axios";


  
function ImageInfo () {

   const [data, setData] = useState({});
   
   useEffect (()=> {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=KIgeE6B1p5RrbH06R2C7yYeHZFGIuCFKPtbpXLrQ")
    
    .then ( 
      res => setData(res.data))
    
    .catch(err => console.log(err))
   
   }, [])
  
  return (
  
  <div className="ImageInfo">
    
    
    <p>{data.copyright}</p>
    <p>{data.date}</p>
    <p>{data.title}</p>
    <p>{data.explanation}</p>
    

    
  </div>

  )

    
  
}
  
 


export default ImageInfo;