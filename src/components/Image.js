import React from "react";




const Image = (props) => {

if (!props.image.url) return <h3>Loading...</h3>;

  return (
 <div className="Image">

<img src={props.image.url} alt ="NASA APOD" />


 </div>

  );
};

export default Image;