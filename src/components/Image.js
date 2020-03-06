import React from "react";
import styled from "styled-components";


const Image = (props) => {

const StyledImage = styled.img`
  border-radius: 15px;
`

if (!props.image.url) return <h3>Loading...</h3>;

  return (
 <div className="Image">

<StyledImage src={props.image.url} alt ="NASA APOD" />


 </div>

  );
};

export default Image;