import React, { useState } from 'react'
import PropTypes from 'prop-types'
// // // state is nothing but avstha present state
export default function Textform(props) {
 
  const handleUpClick = () => {
    console.log("Uppercase was click  " + text);
    let newtext = text.toUpperCase();
    setText(newtext);

    props.showAlert(" Convert to Uppercase", "success");
  }

  const handleclearetext = () => {
    let newText = '';
    setText(newText);
    // props.showAlert("Text Cleared ","Succed"); 
  }
  
  const handleLowClick = () => {
    console.log("Uppercase was click  " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert(" Convert to lowercase", "success");
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Text Copied", "success");
    // document.innerhtml=
  }
  const handleToggleCaseClick = () => {
    let words = text.split(" ");
    let newText = words
      .map((word) => {
        let newWord = "";
        for (let i = 0; i < word.length; i++) {
          let char = word.charAt(i);
          if (char >= "A" && char <= "Z") {
            char = char.toLowerCase();
          } else if (char >= "a" && char <= "z") {
            char = char.toUpperCase();
          }
          newWord += char;
        }

        return newWord;
      })
      .join(" ");

    setText(newText);
    props.showAlert(" Case changed", "success");
  };
  const handleSentenceCaseClick = () => {
    let lowerCase = text.toLowerCase();
    let regex = /([^.!?]+[!?.\d\s]+)/g;
    let sentences = lowerCase.match(regex);
    let newText = sentences
      .map((sentence) => {
        return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
          ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
          : sentence);
      })
      .join("");

    setText(newText);
  };
  // const btn = document.getElementById('bb');
  // btn.addEventListener('click', function handleeCopy() {
  //   btn.textContent = 'Copied';
  // })
  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };

  //this function converts the first letter of every word to uppercase the rest of letters are lower case
  const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };
  const handleExtraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  //  text="new text" wrong way to change the state
  //  setText("new text"); //Correct way to change the state

  return (
    <> <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

      {/* Hooks help in using feature of class without making class */}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="mybox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} on onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#9DB2BF' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleToggleCaseClick}>Change the case</button>
      <button className="btn btn-primary mx-2" onClick={handleSentenceCaseClick}>Paragraph case</button>
      <button className="btn btn-primary mx-2" onClick={handleCapitalizeWordClick}>Title case</button>
      <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse string</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleclearetext}>Clear text</button>
      <button className="btn btn-primary mx-2 my-2" id="bb" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-2 my-2" id="bb" onClick={handleExtraspace}>Remove extra spaces</button>
      {/* <button className="btn btn-primary mx-2" onClick={handleCapitalizeWordClick}>handle Capitalize Word Click</button> */}
    </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} character</p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </>
  )
}
