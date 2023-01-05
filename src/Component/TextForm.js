import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text");

  const textLength = (msg, alert) => {
    if (text.length === 0) {
      props.showAlert(msg, "warning");
    } else {
      props.showAlert(alert, "success");
    }
  };

  const handleUpClick = () => {
    let check = text;
    if (check.toUpperCase() === text) {
      let mfdTextToLw = text.toLowerCase();
      setText(mfdTextToLw);
      textLength(
        "Enter text in text area.",
        "Text has been Converted to Lower Case."
      );
      // props.showAlert("Text has been Converted to Lower Case." ,"success");
    } else if (check.toLowerCase() === text) {
      let mfdTextToUp = text.toUpperCase();
      setText(mfdTextToUp);
      textLength(
        "Enter text in text area.",
        "Text has been Converted to Upper Case."
      );
      // props.showAlert("Text has been Converted to Upper Case" ,"success");
    } else {
      let mfdTextToLw = text.toLowerCase();
      setText(mfdTextToLw);
      textLength(
        "Enter text in text area.",
        "Text has been Converted to Lo Case."
      );
      // props.showAlert("Text has been Converted to Lower Case." ,"success");
    }
  };
  const handleLwClick = () => {
    let mfdTextToLw = text.toLowerCase();
    setText(mfdTextToLw);
    textLength(
      "Enter text in text area.",
      "Text has been Converted to Lower Case."
    );
    // props.showAlert("Text has been Converted to Lower Case." ,"success");
  };

  const handleClClick = () => {
    let mfdTextToLw = "";
    setText(mfdTextToLw);
    textLength("Enter text in text area.", "Text has been Cleared.");
    // props.showAlert("Text has been Cleared.", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    textLength(
      "Enter text in text area.",
      "Text has been copied to clipboard."
    );
    // props.showAlert("Text has been copied to clipboard." ,"success");
  };

  const handleExtraSpaces = () => {
    let space1 = text.split(/[ ]+/g);
    setText(space1.join(" "));
    textLength(
      "Enter text in text area.",
      "Extra Spaces has been Removed from text."
    );
    // props.showAlert("Extra Spaces has been Removed from text." ,"success");
  };

  // const handleCpClick = () => {
  //   let eachWord = text.split(" ");
  //   console.log(eachWord.length);
  //   var newStr = "";
  //   for (let i = 0; i <= eachWord.length - 1; i++) {
  //     let wordOfText = eachWord[i];
  //     console.log("word", i);
  //     wordOfText = wordOfText[0].toUpperCase() + wordOfText.slice(1);
  //     newStr = newStr+wordOfText+" "

  //     console.log("newStr "+newStr);
  //   }
  //   setText(newStr);
  // };

  const handleCpClick = () => {
    try {
      let eachWord = text.split(" ");
      console.log(eachWord.length);
      for (let i = 0; i <= eachWord.length - 1; i++) {
        eachWord[i] =
          eachWord[i][0].toUpperCase() + eachWord[i].slice(1).toLowerCase();
      }
      let capitalizeText = eachWord.join(" ");
      setText(capitalizeText);
      textLength(
        "Enter text in text area.",
        "Text first letter has been Capitalized to Upper Case."
      );
    } catch (err) {
      if (text.length === 0) {
        props.showAlert("Enter text in text area.", "warning");
      } else {
        props.showAlert(
          "Extra Spaces on text please remove extra spaces.",
          "danger"
        );
      }
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const calWord = (word) => {
    let removeExtraSpaceOfWord = word.replace(/(^\S)|(\B[ ]+)/gm, "");
    let removeLastSpaceOfWord = removeExtraSpaceOfWord.replace(/\s+$/gm, "");
    let lengthWord = removeLastSpaceOfWord.split(" ").length;

    return lengthWord;
  };


  return (
    <>
      <div style={{color:props.textMode.color}}>
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              id="myBox"
              rows="8"
              style={{
                backgroundColor:props.textMode.backgroundColor,
                color: props.textMode.color,
              }}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1 my-1" style= {{backgroundColor:props.colorMode.btnColor,color:props.colorMode.btnTextColor,borderColor:props.colorMode.btnBorder}}onClick={handleUpClick}>
            Convert to upcase and Lwrcase
          </button>
          <button className="btn btn-primary mx-1 my-1" style= {{backgroundColor:props.colorMode.btnColor,color:props.colorMode.btnTextColor,borderColor:props.colorMode.btnBorder}} onClick={handleLwClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-1 my-1" style= {{backgroundColor:props.colorMode.btnColor,color:props.colorMode.btnTextColor,borderColor:props.colorMode.btnBorder}} onClick={handleCpClick}>
            Convert to Capitalize
          </button>
          <button className="btn btn-primary mx-1 my-1" style= {{backgroundColor:props.colorMode.btnColor,color:props.colorMode.btnTextColor,borderColor:props.colorMode.btnBorder}} onClick={handleClClick}>
            Clear
          </button>
          <button className="btn btn-primary mx-1 my-1" style= {{backgroundColor:props.colorMode.btnColor,color:props.colorMode.btnTextColor,borderColor:props.colorMode.btnBorder}} onClick={handleCopy}>
            Copy text
          </button>
          <button className="btn btn-primary mx-1 my-1" style= {{backgroundColor:props.colorMode.btnColor,color:props.colorMode.btnTextColor,borderColor:props.colorMode.btnBorder}} onClick={handleExtraSpaces}>
            Remove extra space
          </button>
        </div>
        <div className="container my-4">
          <h1>Your text summary</h1>

          <p>
            {text.length > 0 ? calWord(text) : 0} words and {text.length}{" "}
            characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter the text in text area"}</p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
  //   textTitle: PropTypes.strting,
  // homeText: PropTypes.strting
};

TextForm.defaultProps = {
  heading: "Taxt heading here",
  //   textTitle: "Text area title here",
  // homeText: "Home"
};
