import "./App.css";
// import About from "./Component/About";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import React, { useState } from "react";
import Alert from "./Component/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState({
    color: "black",
    backgroundColor: "#e9e9e9",
    aboutBg:"rgb(247 247 247)"
  });
  const [btnModeText, setBtnModeText] = useState("Enable Dark mode");
  const [alert, setAlert] = useState(null);

  const [colorMode, setColorMode] = useState({
    color: "black",
    backgroundColor: "#e9e9e9",
    btnColor: "#0b5ed7",
    btnBorder: "#0b5ed7",
    btnTextColor: "white",
    textDeco:"none",
  });

  const clickBlueBtn = () => {
    setColorMode({
      color: "white",
      backgroundColor: "#06183e",
      btnColor: "rgb(12 177 255)",
      btnBorder: "rgb(12 177 255)",
      btnTextColor: "black",
      textDeco:"none",
    });
    setTextMode({
      color: "white",
      backgroundColor: "rgb(2 18 54)",
      aboutBg:"#002756"
    });
    showAlert("Blue mode is Enabled.", "success");

    document.body.style.backgroundColor = "#002756";
  };

  const clickPurpleBtn = () => {
    setColorMode({
      color: "white",
      backgroundColor: "#664470",
      btnColor: "rgb(59 30 98)",
      btnBorder: "rgb(59 30 98)",
      btnTextColor: "white",
      textDeco:"none",
    });
    setTextMode({
      color: "black",
      backgroundColor: "rgb(134 90 167)",
      aboutBg:"rgb(147 87 203)"
    });
    showAlert("Purple mode is Enabled.", "success");
    document.body.style.backgroundColor = "rgb(147 87 203)";
  };

  const clickPinkBtn = () => {
    setColorMode({
      color: "white",
      backgroundColor: "#8f046a",
      btnColor: "rgb(255 122 220)",
      btnBorder: "rgb(143, 4, 106)",
      btnTextColor: "black",
      textDeco:"none",
    });
    setTextMode({
      color: "black",
      backgroundColor: "rgb(143, 4, 106)",
      aboutBg:"rgb(208 46 211)"
    });
    showAlert("Pink mode is Enabled.", "success");
    document.body.style.backgroundColor = "rgb(208 46 211)";
  };

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextMode({
        color: "white",
        backgroundColor: "rgb(14 14 14)",
        aboutBg:"#1c1c1c"
      });
      setColorMode({
        color: "white",
        backgroundColor: "#0e0e0e",
        btnColor: "rgb(255 255 255)",
        btnBorder: "rgb(255 255 255)",
        btnTextColor: "black",
        textDeco:"none",
      });

      setBtnModeText("Enable Light mode");
      showAlert("Dark mode is Enabled.", "success");
      document.body.style.backgroundColor = "#1c1c1c";
    }
     else if (mode === "dark") {
      setMode("light");
      setTextMode({
        color: "black",
        backgroundColor: "#e9e9e9",
        aboutBg:"rgb(247 247 247)"
      });
      setColorMode({
        color: "black",
        backgroundColor: "#e9e9e9",
        btnColor: "#0b5ed7",
        btnBorder: "#0b5ed7",
        btnTextColor: "white",
        textDeco:"none",
      });

      setBtnModeText("Enable Dark mode");
      showAlert("Light mode is Enabled.", "success");
      document.body.style.backgroundColor = "rgb(247 247 247)";
    }
  };
  // document.body.style.backgroundColor = "rgb(247 247 247)";

  return (
    <>
      {/* <Router> */}
        <Navbar
          navbarName="TextUtils"
          modes={mode}
          toggleMode1={toggleMode}
          textMode={textMode}
          btnModeText={btnModeText}
          clickBlueBtn={clickBlueBtn}
          clickPurpleBtn={clickPurpleBtn}
          clickPinkBtn={clickPinkBtn}
          colorMode={colorMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About textMode={textMode} />} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" modes={mode} colorMode={colorMode} textMode={textMode} />} /> */}
        {/* </Routes> */}
        {/* <About textMode={textMode} /> */}
        <TextForm showAlert={showAlert} heading="Enter the hello text to analyze below" modes={mode} colorMode={colorMode} textMode={textMode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
