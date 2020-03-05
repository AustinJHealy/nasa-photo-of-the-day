import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";

  
function ImageContainer () {

   const [data, setData] = useState({});
   
   useEffect (()=> {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=KIgeE6B1p5RrbH06R2C7yYeHZFGIuCFKPtbpXLrQ")
    
    .then ( 
      res => setData(res.data)
      
    )
   }, [data.url])
  return (
  <div className="ImageContainer">
    
    <p>NASA ASTRONOMY PHOTO of the DAY</p>
    <Image image={data} />
    
  </div>

  )

    
  
  }
  
   
   
 
  
  

  


  


 


export default ImageContainer;