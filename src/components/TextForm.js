import React, {useState} from "react";


export default function TextForm(props) {



  const handleUpClick=()=>{
    //console.log("Upper case was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success");
  }

  const handleOnChange=(event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }

  
  const handleloClick=()=>{
    //console.log("Upper case was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case","success");
  }

  
  const extractEmails = () => {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    }

    
const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("copied to clipboard","success");
    
}

const handleExtraSpaces = () => {
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
  props.showAlert("extra spaces are cleared","success");

}
const handleClear = () => {
  
  setText('');
  props.showAlert("text is cleared","success");

}

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button type="button" className={`btn btn-${props.mode2==='green'?'success':'primary'} mx-2`} onClick={handleUpClick}>Convert to UpperCase</button>
      <button className={`btn btn-${props.mode2==='green'?'success':'primary'} mx-2`} onClick={handleloClick}>Convert to LowerCase</button>
      <button className={`btn btn-${props.mode2==='green'?'success':'primary'} mx-2`} onClick={handleCopy}>Copy to clipboard</button>
      <button className={`btn btn-${props.mode2==='green'?'success':'primary'} mx-2`} onClick={handleClear}>Clear Text</button>
      <button className={`btn btn-${props.mode2==='green'?'success':'primary'} mx-2`} onClick={handleExtraSpaces}>Clear extra spaces</button>
    </div> 

    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2>
      <b>
      <p> {text.split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
      </b>
    
      <p>{0.008*(text.split(" ").filter(Boolean).length)} average minutes are required to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter in the text box to preview'}</p>
      <p>Emails: <b>{extractEmails()+"  "}</b></p>
    </div>
    </>
  );
}
