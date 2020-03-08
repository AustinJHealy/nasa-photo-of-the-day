import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

  
function ImageInfo () {

   const [data, setData] = useState({});

  const StyledHeader = styled.h1`
    color: blue;
    border: 5px dashed red;
    font-size: 2rem;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    border-radius: 10px;
    margin: 2% 20%;
    padding: 1%;
  `
  const StyledParagraph = styled.p`
    color: red;
    border: 5px dotted blue;
    font-size: 1rem;
    font-family: Tahoma, Geneva, sans-serif;
    border-radius: 10px;
    margin: 2% 10%;
    padding: 1%;
    
`
  const StyledSub = styled.h2`
    color: blue;
    font-size: 1.5rem;
    font-family: "Courier New", Courier, monospace;
    font-weight: lighter;
  
  `
   useEffect (()=> {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=KIgeE6B1p5RrbH06R2C7yYeHZFGIuCFKPtbpXLrQ")
    
    .then ( 
      res => setData(res.data))
    
    .catch(err => console.log(err))
   
   }, [])
  
  return (
  
  <div className="ImageInfo">
    
    
    <StyledSub>{data.copyright}</StyledSub>
    <StyledSub>{data.date}</StyledSub>
    <StyledHeader>{data.title}</StyledHeader>
    <StyledParagraph>{data.explanation}</StyledParagraph>
    

    
  </div>

  )

    
  
}
  
 


export default ImageInfo;