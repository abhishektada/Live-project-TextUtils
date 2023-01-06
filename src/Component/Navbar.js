import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  // const [colorMode, setColorMode] = useState({
  //   color: "black",
  //   backgroundColor: "blue",
  // })

  // const clickBlueBtn =()=>{
  //  if (colorMode.backgroundColor==="blue"||colorMode.backgroundColor==="purple"||colorMode.backgroundColor==="pink"){
  //   setColorMode({
  //     color: "black",
  //     backgroundColor: "blue",
  //   })
  //   document.body.style.backgroundColor="rgb(7 57 131)"
  //  }
  // }

  //  const clickPurpleBtn =()=>{
  //   if (colorMode.backgroundColor==="blue"||colorMode.backgroundColor==="pink"){
  //   setColorMode({
  //     color: "white",
  //     backgroundColor: "purple",
  //   })
  //   document.body.style.backgroundColor="rgb(147 87 203)"
  //  }
  // }

  //  const clickPinkBtn =()=>{
  //  if(colorMode.backgroundColor==="blue"||colorMode.backgroundColor==="purple"){
  //   setColorMode({
  //     color: "white",
  //     backgroundColor: "pink",
  //   })
  //   document.body.style.backgroundColor="rgb(208 46 211)"
  //  }
  // }


  return (
    <nav className={"navbar navbar-expand-lg"} style={{color:props.colorMode.color,backgroundColor:props.colorMode.backgroundColor}}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/" style={{color:props.colorMode.color}}>
          {props.navbarName}
        </Link>
        <button
          className=" navbar-toggler mx-3" style={{color:props.colorMode.color,backgroundColor:props.colorMode.backgroundColor}}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{fontWeight:"600",fontSize:"25px",textAline:"center",lineHeight:"125%"}}>| | |</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-a active mx-2" aria-current="page" to="/" style={{color:props.colorMode.color,textDecoration:props.colorMode.textDeco}}>
                {props.homeText}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-a mx-2" to="/about" style={{color:props.colorMode.color,textDecoration:props.colorMode.textDeco}}>
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className={"form-check form-switch" }>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode1}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.btnModeText}
            </label>
          </div>
          <div className="btn-group m-3" role="group" aria-label="Basic example">
              <button type="button" onClick={props.clickBlueBtn} className="btn btn-primary mx-2 p-2.5  border-0 rounded-3" style={{backgroundColor:"rgb(7 57 131)"}}>Blue</button>
              <button type="button" onClick={props.clickPurpleBtn} className="btn btn-primary border-0 mx-2 p-2.5 rounded-3"style={{backgroundColor:"rgb(147 87 203)"}}>Purple</button>
              <button type="button" onClick={props.clickPinkBtn} className="btn btn-primary mx-2 p-2.5 border-0 rounded-3"style={{backgroundColor:"rgb(208 46 211)"}}>Pink</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  navbarName: PropTypes.string,
  aboutText: PropTypes.string,
  homeText: PropTypes.string,
};

Navbar.defaultProps = {
  navbarName: "title Taxt here",
  aboutText: "About",
  homeText: "Home",
};
