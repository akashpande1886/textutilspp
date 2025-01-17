import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success")

  };
  const handleCleClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");

  return (
     <div   style={{color:props.mode==='dark'?'white':'black'}}>


      <div className="container"         
 >
        <h1 >Enter text to analyse below</h1>

        <textarea
          className="form-control mb-3"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} 
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary  " onClick={handleUpClick}>
        Convert to Uppercase
      </button>  
      <button className="btn btn-primary mx-2 " onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2 " onClick={handleCleClick}>
        Clear
      </button>
      <h2>Your text summary</h2>
<p> {text.split(" ").length} words {text.length-text.split(" ").length+1} characters</p>
      {text}
    </div>
  );
}
